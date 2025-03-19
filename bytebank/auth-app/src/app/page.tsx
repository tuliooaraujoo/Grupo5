"use client"

import Footer from "@/components/Footer"
import Header from "@/components/InitialHeader"
import Main from "@/components/Main"
import { ModalProvider } from "@/context/ModalContext"

export default function Home() {
  return (
    <div>
      <ModalProvider>
        <Header/>
        <Main />
        <Footer/>
      </ModalProvider>
    </div>
  )
}
