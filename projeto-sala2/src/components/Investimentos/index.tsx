import React from "react";
import Image from "next/image";
import grafico from "./grafico.svg";
import estilos from "./Investimentos.module.css";

interface BoxProps {
  renda: string;
  estilos: string;
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ renda, estilos, children }) => (
  <div className={estilos}>
    <h4>{renda}</h4>
    <p>{children}</p>
  </div>
);

const Investimentos: React.FC = () => {
  return (
    <section className="container">
      <div className="detalhe__superior" />
      <div className={estilos.wrapper}>
        <div className={estilos.investimentos}>
          <h2>Investimentos</h2>
          <p>Total: R$ 1.000.000,00</p>
        </div>
        <div className={estilos.aplicacoes}>
          <Box renda="Renda Fixa" estilos={estilos.renda}>
            R$ 300.000,00
          </Box>
          <Box renda="Renda Variável" estilos={estilos.renda}>
            R$ 700.000,00
          </Box>
        </div>
        <h3>Estatísticas</h3>
        <div className={estilos.grafico}>
          <Image
            src={grafico}
            alt="Gráfico dos investimentos"
            width={400}
            height={300}
          />
        </div>
      </div>
      <div className="detalhe__inferior" />
    </section>
  );
};

export default Investimentos;
