export async function buscaSaldo(): Promise<number> {
  try {
    const response = await fetch("/saldo");
    const data = await response.json();
    return data.valor;
  } catch (err) {
    console.error(err);
    return 1000;
  }
}

export async function atualizaSaldo(novoSaldo: number): Promise<void> {
  try {
    const response = await fetch("/saldo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ valor: novoSaldo }),
    });
    console.log(response.status);
  } catch (err) {
    console.error(err);
  }
}
