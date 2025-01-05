import Image from "next/image";
import { FC } from "react";

interface IconeProps {
  icone: {
    imagem: string;
    servico: string;
  };
  estilos: { [key: string]: string };
}

const Icone: FC<IconeProps> = ({ icone, estilos }) => {
  return (
    <div className={estilos.servicos}>
      <Image src={icone.imagem} alt={icone.servico} width={50} height={50} />
      <h5>{icone.servico}</h5>
    </div>
  );
};

export default Icone;
