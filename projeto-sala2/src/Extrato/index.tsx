interface Transaction {
    type: "depósito" | "transferência";
    value: number;
    date: string;
  }
  
  interface ExtratoProps {
    transactions: Transaction[];
  }
  
  const Extrato = ({ transactions }: ExtratoProps) => {
    return (
      <div className="w-full mt-8">
        <h3 className="text-xl font-bold">Extrato de Transações</h3>
        <div className="mt-4">
          {transactions.length === 0 ? (
            <p>Não há transações realizadas ainda.</p>
          ) : (
            <ul>
              {transactions.map((transaction, index) => (
                <li key={index} className="border-b py-2">
                  <div>
                    <span className="font-semibold">
                      {transaction.type === "depósito" ? "Depósito" : "Transferência"}
                    </span>
                    <span className="text-sm text-gray-500 ml-2">{transaction.date}</span>
                  </div>
                  <div className="text-blue">
                    {transaction.type === "depósito" ? "+" : "-"} R$ {transaction.value.toFixed(2)}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };
  
  export default Extrato;
  