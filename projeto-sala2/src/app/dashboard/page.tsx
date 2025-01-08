import Header from "@/components/Header";
import { ModalProvider } from "@/context/ModalContext";

export default function Dashboard() {
  return (
    <ModalProvider>
    <div>
        <Header />
      <h1>Bem vindo ao dashboard!</h1>
    </div>
    </ModalProvider>
  );
}