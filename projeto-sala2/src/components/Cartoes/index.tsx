import Image, { StaticImageData } from "next/image";
import styles from "./Cartoes.module.css";
import cartaoFisico from "./fisico.svg";
import cartaoDigital from "./digital.svg";
import Button from "../Button";

interface CartaoProps {
  tipo: string;
  imagem: StaticImageData;
  funcao: string;
}

const Cartoes = () => {
  const cards: CartaoProps[] = [
    {
      tipo: "Cartão físico",
      imagem: cartaoFisico,
      funcao: "Débito/Crédito",
    },
    {
      tipo: "Cartão digital",
      imagem: cartaoDigital,
      funcao: "Débito",
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Meus cartões</h2>
      {cards.map((card, index) => (
        <div key={index}>
          <p className={styles.subtitle}>{card.tipo}</p>
          <div className={styles.card}>
            <Image
              src={card.imagem}
              alt={card.tipo}
              width={327}
              height={164}
            />
            <div className={styles.buttons}>
              <Button
                backgroundColor="var(--orange)"
                color="var(--white)"
                padding="var(--space-small)"
                border="none"
                width="250px"
              >
                Configurar
              </Button>
              <Button
                backgroundColor="transparent"
                color="var(--error)"
                padding="var(--space-small)"
                border="2px solid var(--error)"
                width="250px"
              >
                Configurar
              </Button>
              <span>Função: {card.funcao}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cartoes;
