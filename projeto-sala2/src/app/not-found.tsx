import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ModalProvider } from "@/context/ModalContext";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/NotFound.module.css";

export default function NotFound() {
  return (
    <ModalProvider>
      <Header isLoggedIn={false} />
      <div className={styles.notFound}>
        <h2 className={styles.notFound_title}>
          Ops! Não encontramos a página...
        </h2>
        <div className={styles.notFound_text}>
          <p>E olha que exploramos o universo procurando por ela!</p>
          <p>Que tal voltar e tentar novamente?</p>
        </div>
        <Link href="/" className={styles.notFound_button}>
          Voltar ao início
        </Link>
        <Image
          src="/images/ilustrations/ilustration_404.svg"
          alt="Ilustração de uma pessoa sentada e um universo como plano de fundo com um planeta e o número 404 em destaque"
          width={470}
          height={354}
        />
      </div>
      <Footer />
    </ModalProvider>
  );
}
