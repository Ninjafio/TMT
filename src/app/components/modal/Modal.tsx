'use client'

import { useRouter } from "next/router"

export default function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter()

    const handleOpenChange = () => {
        router.back()
    }

    return (
        <div onClick={handleOpenChange}>
            {children}
        </div>
    )
}