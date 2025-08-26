import { NextResponse } from "next/server";
import FormDataNode from "form-data";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const fields: Record<string, string> = {
      name: formData.get("name")?.toString() || "",
      fam: formData.get("fam")?.toString() || "",
      otch: formData.get("otch")?.toString() || "",
      org: formData.get("org")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      area: formData.get("area")?.toString() || "",
    };

    let txt = "";
    for (const [key, value] of Object.entries(fields)) {
      if (value) {
        const label = {
          name: "Имя",
          fam: "Фамилия",
          otch: "Отчество",
          org: "Организация",
          phone: "Телефон",
          email: "E-mail",
          area: "Сообщение",
        }[key];
        txt += `<b>${label}:</b> ${value}\n`;
      }
    }

    const token = process.env.TELEGRAM_BOT_TOKEN!;
    const chat_id = process.env.TELEGRAM_CHAT_ID!;

    // 1. Отправляем текст
    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id,
        text: txt,
        parse_mode: "HTML",
      }),
    });

    // 2. Отправляем файлы
    const files = formData.getAll("file") as File[];

    for (const f of files) {
      if (f && f instanceof File) {
        const fd = new FormData(); // ✅ используем нативный FormData
        fd.append("chat_id", chat_id);

        if (f.type.startsWith("image/")) {
          fd.append("photo", f, f.name); // ✅ просто передаем File
          await fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
            method: "POST",
            body: fd,
          });
        } else {
          fd.append("document", f, f.name);
          await fetch(`https://api.telegram.org/bot${token}/sendDocument`, {
            method: "POST",
            body: fd,
          });
        }
      }
    }

    return NextResponse.json({ success: true, message: "Сообщение отправлено!" });
  } catch (error) {
    console.error("Ошибка при отправке:", error);
    return NextResponse.json({ success: false, message: "Ошибка при отправке" }, { status: 500 });
  }
}
