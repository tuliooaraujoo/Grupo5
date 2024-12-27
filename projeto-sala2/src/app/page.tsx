import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import { ModalProvider } from "@/context/ModalContext";

export default function Home() {
  return (
    <ModalProvider>
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
    </ModalProvider>
  );
}