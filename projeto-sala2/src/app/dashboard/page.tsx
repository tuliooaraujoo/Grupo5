"use client"

import Main from "@/components/Main"
import { ModalProvider } from "@/context/ModalContext"

export default function Home() {
  return (
    <div>
      <ModalProvider>
        <Main />
      </ModalProvider>
    </div>
  )
}
