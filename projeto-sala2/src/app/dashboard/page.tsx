import AccountSettings from "@/components/AccountSettings";
import Header from "@/components/Header";
import { ModalProvider } from "@/context/ModalContext";

export default function Dashboard() {
  return (
    <ModalProvider>
      <div>
        <Header />
        <AccountSettings />
      </div>
    </ModalProvider>
  );
}
