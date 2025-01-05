import { FC } from "react";
import estilos from "./Transacao.module.css";
import Ilustracao from "./ilustracao.svg";
import Formulario from "./Formulario";

interface TransacaoProps {
  realizarTransacao: (dados: unknown) => void;
}

const Transacao: FC<TransacaoProps> = ({ realizarTransacao }) => {
  return (
    <section className="container">
      <div className="detalhe__superior" />
      <div className={estilos.wrapper}>
        <Formulario realizarTransacao={realizarTransacao} />
      </div>
      <Ilustracao height="229" width="459" />
      <div className="detalhe__inferior" />
    </section>
  );
};

export default Transacao;
