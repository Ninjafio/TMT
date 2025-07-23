'use client'

import { useRouter } from "next/navigation";
import Image from "next/image";
import Close from "public/Close.svg"
import "./style.scss"

export default function Page() {
  const router = useRouter()
  return (
    <div className="modal">
      +7 985 (467) 16-29
      <Image src={Close} alt="x" className="close" onClick={() => router.back()} />
    </div>
  );
}
