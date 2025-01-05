import React from "react";
import estilos from "./Extrato.module.css";
import Transacoes from "./Transacoes";

interface Transacao {
  id: number;
  descricao: string;
  valor: number;
  data: string;
}

interface ExtratoProps {
  transacoes: Transacao[];
}

const Extrato: React.FC<ExtratoProps> = ({ transacoes }) => {
  return (
    <section className={estilos.container}>
      <h2 className={estilos.titulo}>Extrato</h2>
      <ul data-testid="lista-transacoes">
        {transacoes.map((transacao) => (
          <Transacoes
            key={transacao.id}
            transacao={transacao}
            estilos={estilos}
          />
        ))}
      </ul>
    </section>
  );
};

export default Extrato;
