'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";
import Close from "public/Close.svg"
import "./style.scss"

export default function Page() {
  const router = useRouter()
  const handleClose = () => {
    router.back()
  }
  return (
    <div className="modal">
      ooo_tmt@mail.ru
      <Image src={Close} alt="x" className="close" onClick={() => handleClose()} />
    </div>
  );
}
