interface Transacao {
  id: string;
  valor: number;
  data: string;
}

export async function buscaTransacoes(): Promise<Transacao[]> {
  try {
    const response = await fetch("/transacoes");
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function salvaTransacao(
  novaTransacao: Transacao
): Promise<number | string> {
  try {
    const response = await fetch("/transacoes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(novaTransacao),
    });
    return response.status;
  } catch (err) {
    console.error(err);
    return "Erro na requisição";
  }
}
