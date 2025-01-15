import Footer from "@/components/Footer"
import Header from "@/components/Header/InitialHeader"
import NotFound from "@/components/NotFound"
import { ModalProvider } from "@/context/ModalContext"

export default function Home() {
  return (
    <div>
      <ModalProvider>
        <Header />
        <NotFound />
        <Footer />
      </ModalProvider>
    </div>
  )
}