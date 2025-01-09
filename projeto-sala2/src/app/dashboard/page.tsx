import Cards from "@/components/Cards";
import Header from "@/components/Header";
import { ModalProvider } from "@/context/ModalContext";

export default function Dashboard() {
  return (
    <ModalProvider>
    <div>
        <Header />
      <Cards />
    </div>
    </ModalProvider>
  );
}