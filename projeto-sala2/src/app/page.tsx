"use client"

import ModalApplication from "@/components/Modal/ModalApplication";
import ModalButtons from "@/components/Modal/ModalButtons";
import { ModalProvider } from "@/context/ModalContext";

export default function Home() {
  return (
    <div>
      <ModalProvider>
        <ModalButtons variant="header" />
        <ModalApplication />
      </ModalProvider>
    </div>
  )
}
