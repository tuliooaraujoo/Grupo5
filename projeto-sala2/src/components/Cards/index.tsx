import Image, { StaticImageData } from "next/image";
import styles from "./Cartoes.module.css";
import physicalCard from "./physical.svg";
import digitalCard from "./digital.svg";
import Button from "../Button";

interface CardProps {
  type: string;
  image: StaticImageData;
  function: string;
}

const Cards = () => {
  const cards: CardProps[] = [
    {
      type: "Cartão físico",
      image: physicalCard,
      function: "Débito/Crédito",
    },
    {
      type: "Cartão digital",
      image: digitalCard,
      function: "Débito",
    },
  ];

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Meus cartões</h2>
      {cards.map((card, index) => (
        <div key={index}>
          <p className={styles.subtitle}>{card.type}</p>
          <div className={styles.card}>
            <Image
              src={card.image}
              alt={card.type}
              width={327}
              height={164}
            />
            <div className={styles.buttons}>
              <Button className={styles.button_settings}>
                Configurar
              </Button>
              <Button className={styles.button_block}>
                Bloquear
              </Button>
              <span>Função: {card.function}</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Cards;
