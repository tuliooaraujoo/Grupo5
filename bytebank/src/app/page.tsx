"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header/InitialHeader"
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
