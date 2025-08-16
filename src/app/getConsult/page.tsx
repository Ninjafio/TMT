"use client";
import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import fileImg from "public/file.svg";
import "./style.css";

interface FormData {
  name: string;
  fam: string;
  otch?: string;
  org?: string;
  phone: string;
  email: string;
  area?: string;
  file?: FileList;
  consent: boolean;
}

function formatBytes(bytes: number, decimals = 2): string {
  if (!+bytes) return "0 Bytes";
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return ` Размер файла: ${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${
    sizes[i]
  }`;
}

export default function ConsultationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>();

  // Состояние для файлов
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  // Обработчик добавления файлов
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = e.target.files;
    if (newFiles) {
      // Проверка на дубликаты по имени и размеру
      const uniqueNewFiles = Array.from(newFiles).filter(
        (newFile) =>
          !uploadedFiles.some(
            (existingFile) =>
              existingFile.name === newFile.name &&
              existingFile.size === newFile.size
          )
      );
      setUploadedFiles((prev) => [...prev, ...uniqueNewFiles]);
    }
    e.target.value = ""; // очищаем инпут
  };

  // Синхронизация с react-hook-form
  useEffect(() => {
    const dataTransfer = new DataTransfer();
    uploadedFiles.forEach((file) => dataTransfer.items.add(file));
    setValue("file", dataTransfer.files, { shouldValidate: true });
  }, [uploadedFiles, setValue]);

  // Функция удаления файла из состояния
  const handleRemoveFile = (indexToRemove: number) => {
    setUploadedFiles((prev) =>
      prev.filter((_, index) => index !== indexToRemove)
    );
  };

  const onSubmit: SubmitHandler<FormData> = (data) => {
    alert("Форма успешно отправлена!");
    // Тут можно обработать отправку данных на сервер
    //Алерт для проверки работоспособности формы, мы его уберем в конце
  };

  return (
    <main>
      <div className="consultTitleBl">
        <p className="consultTitle">ОФОРМЛЕНИЕ ЗАЯВКИ</p>
        <div className="consultSubtitBl">
          <p className="consultSubtit">
            Чтобы получить консультацию, просто заполните форму ниже
          </p>
        </div>
      </div>

      <div className="formBl">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label htmlFor="name">
            <p className="labelP">Ваше имя</p>*
          </label>
          <input
            className="formInp1"
            type="text"
            id="name"
            placeholder="Введите ваше имя"
            {...register("name", {
              required: "Имя обязательно для заполнения",
              pattern: {
                value: /^[A-Za-zА-Яа-яЁё-]+$/,
                message: "Используйте только буквы и дефис, без пробелов.",
              },
              minLength: { value: 2, message: "Минимум 2 символа" },
            })}
          />
          {errors.name && (
            <p className="error-message">{errors.name.message}</p>
          )}

          <label htmlFor="fam">
            <p className="labelP">Вашa фамилия</p>*
          </label>
          <input
            className="formInp1"
            type="text"
            id="fam"
            placeholder="Введите вашу фамилию"
            {...register("fam", {
              required: "Фамилия обязательна для заполнения",
              pattern: {
                value: /^[A-Za-zА-Яа-яЁё-]+$/,
                message: "Используйте только буквы и дефис, без пробелов.",
              },
              minLength: { value: 2, message: "Минимум 2 символа" },
            })}
          />
          {errors.fam && <p className="error-message">{errors.fam.message}</p>}

          <label htmlFor="otch">
            <p className="labelP">Ваше отчество</p>
          </label>
          <input
            className="formInp1"
            type="text"
            id="otch"
            placeholder="Введите ваше отчество (если есть)"
            {...register("otch", {
              pattern: {
                value: /^[A-Za-zА-Яа-яЁё-]+$/,
                message: "Используйте только буквы и дефис, без пробелов.",
              },
              minLength: { value: 2, message: "Минимум 2 символа" },
            })}
          />
          {errors.otch && (
            <p className="error-message">{errors.otch.message}</p>
          )}

          <label htmlFor="org">
            <p className="labelP">Ваша организация</p>
          </label>
          <input
            className="formInp1"
            type="text"
            id="org"
            placeholder="Введите название вашей организации (для юр. лиц)"
            {...register("org")}
          />

          <label htmlFor="phone">
            <p className="labelP">Телефон</p>*
          </label>
          <input
            type="tel"
            className="formInp1"
            id="phone"
            placeholder="+7 (___) ___-__-__"
            {...register("phone", {
              required: "Телефон обязателен для заполнения",
              pattern: {
                value: /^[0-9+]+$/,
                message: "Используйте только цифры, без пробелов",
              },
            })}
            onFocus={(e) => {
              if (e.target.value === "") {
                e.target.value = "+7";
              }
            }}
          />
          {errors.phone && (
            <p className="error-message">{errors.phone.message}</p>
          )}

          <label htmlFor="email">
            <p className="labelP">E-mail</p>*
          </label>
          <input
            className="formInp1"
            type="email"
            id="email"
            placeholder="email@mail.ru"
            {...register("email", {
              required: "E-mail обязателен для заполнения",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Введите корректный E-mail адрес",
              },
            })}
          />
          {errors.email && (
            <p className="error-message">{errors.email.message}</p>
          )}

          <label htmlFor="area">
            <p className="labelP">Обращение</p>
          </label>
          <textarea
            className="areaInp"
            id="area"
            maxLength={2800}
            placeholder="До 2800 символов"
            {...register("area")}
          ></textarea>

          <label htmlFor="fileUpload" className="photoInp">
            <img src="/upload.png" alt="Добавить фото" className="photoIcon" />
            {uploadedFiles.length == 0
              ? "Добавить фото или файл"
              : "Добавить ещё фото или файл"}
          </label>

          <input
            type="file"
            id="fileUpload"
            multiple
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          {errors.file && (
            <p className="error-message">{errors.file.message}</p>
          )}

          <div className="file-preview-container">
            {uploadedFiles.length > 0 && <h4>Прикрепленные файлы:</h4>}
            <ul className="file-list">
              {uploadedFiles.map((file, index) => (
                <li key={`${file.name}-${index}`} className="file-item">
                  {file.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(file)}
                      alt={file.name}
                      className="file-preview-image"
                    />
                  ) : (
                    <Image
                      src={fileImg}
                      alt="file"
                      className="file-preview-icon"
                    />
                  )}
                  <div className="file-info">
                    <span className="file-name">{file.name}</span>
                    <span className="file-size">{formatBytes(file.size)}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(index)}
                    className="file-remove-button"
                  >
                    &times;
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="inpDiv">
            <label htmlFor="consent" className="labelP">
              <input
                type="checkbox"
                id="consent"
                {...register("consent", {
                  required: "Необходимо ваше согласие на обработку данных",
                })}
              />
              <span className="confTxt">
                Я согласен(на) на обработку{" "}
                <a
                  href="/"
                  className="confLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  персональных данных.
                </a>
              </span>
            </label>
          </div>
          {errors.consent && (
            <p className="error-message-checkbox">{errors.consent.message}</p>
          )}

          <button className="submitInp" type="submit">
            ОТПРАВИТЬ
          </button>
        </form>
      </div>
    </main>
  );
}
