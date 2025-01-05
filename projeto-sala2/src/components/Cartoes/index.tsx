import React from "react";
import Image, { StaticImageData } from "next/image";
import estilos from "./Cartoes.module.css";
import cartaoFisico from "./fisico.svg";
import cartaoDigital from "./digital.svg";

interface CartaoProps {
  tipo: string;
  imagem: StaticImageData;
  funcao: string;
}

const Cartoes: React.FC = () => {
  const cartoes: CartaoProps[] = [
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
    <section className="container">
      <div className="detalhe__superior" />
      <div className={estilos.wrapper}>
        <h2>Meus cartões</h2>
        {cartoes.map((cartao, index) => (
          <div key={index}>
            <p>{cartao.tipo}</p>
            <div className={estilos.cartao}>
              <Image
                src={cartao.imagem}
                alt={cartao.tipo}
                width={100}
                height={100}
              />
              <div className={estilos.funcoes}>
                <button className={estilos.botaoConfigurar}>Configurar</button>
                <button className={estilos.botaoBloquear}>Bloquear</button>
                <span>Função: {cartao.funcao}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="detalhe__inferior" />
    </section>
  );
};

export default Cartoes;
