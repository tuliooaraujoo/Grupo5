interface Valores {
  transacao: "Depósito" | "Retirada";
  valor: string;
}

export const calculaNovoSaldo = (valores: Valores, saldo: number): number => {
  if (valores.transacao === "Depósito") {
    return saldo + parseInt(valores.valor, 10);
  } else {
    return saldo - parseInt(valores.valor, 10);
  }
};
