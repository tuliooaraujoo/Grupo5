import { FC } from "react";
import estilos from "./Servicos.module.css";
import icones from "./icones.json";
import Icone from "./Icone";

interface IconeData {
  servico: string;
  imagem: string;
}

const Servicos: FC = () => {
  return (
    <section className="container">
      <div className={estilos.detalhe__superior} />
      <div className={estilos.wrapper}>
        {icones.map((icone: IconeData) => {
          return <Icone key={icone.servico} estilos={estilos} icone={icone} />;
        })}
      </div>
      <div className={estilos.detalhe__inferior} />
    </section>
  );
};

export default Servicos;
