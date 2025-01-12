// import TextField from "@/components/Inputs/TextField";
// import Button from "@/components/Button";
// import SelectorField from "@/components/Inputs/SelectorField";
// import Image from "next/image";
// import transaction from "../../../../public/images/illustrations/transaction.svg";

// const FormTransaction = () => {
//     return (
//         <form
//             className="relative bg-background bg-cover bg-no-repeat rounded-lg grid gap-4 grid-cols-2 grid-rows-[auto_auto_auto_auto_1fr] w-2/3 p-8 max-sm:gap-2 max-sm:flex max-sm:flex-col max-sm:items-center"
//         >
//             <h4 className="text-xl font-bold max-sm:text-center col-span-2">
//                 Nova Transação
//             </h4>
//             <div className="col-span-2">
//                 <SelectorField />
//             </div>
//             <div className="col-start-1">
//                 <TextField
//                     id="Value"
//                     placeholder="R$ 00,00"
//                     className="lg:border lg:border-blue lg:focus:outline-blue md:border md:border-blue md:focus:outline-blue max-sm:border max-sm:border-blue max-sm:focus:outline-blue w-4/5 max-sm:w-full"
//                 />
//             </div>
//             <div className="col-start-1">
//                 <Button
//                     text="Concluir Transação"
//                     className="bg-blue text-white w-4/5"
//                     onClick={() => { }}
//                 />
//             </div>
//             <div className="row-start-4 row-span-2 col-start-2 flex justify-end items-end">
//                 <Image
//                     src={transaction}
//                     alt="Ilustração de uma pessoa segurando um cartão gigante"
//                     className="lg:hidden md:w-full max-sm:w-96 max-sm:mt-8"
//                 />
//             </div>
//         </form>
//     );
// };

// export default FormTransaction;

import { useState } from "react";
import TextField from "@/components/Inputs/TextField";
import Button from "@/components/Button";
import SelectorField from "@/components/Inputs/SelectorField";
import Image from "next/image";
import transaction from "../../../../public/images/illustrations/transaction.svg";
import Extrato from "@/Extrato";


interface Transaction {
  type: "depósito" | "transferência";
  value: number;
  date: string;
}

const FormTransaction = () => {
  const [balance, setBalance] = useState<number>(1000); // Saldo inicial da conta
  const [transactionHistory, setTransactionHistory] = useState<Transaction[]>([]); // Histórico de transações
  const [transactionType, setTransactionType] = useState<"depósito" | "transferência">("depósito"); // Tipo de transação
  const [amount, setAmount] = useState<string>(""); // Valor da transação como string

  const handleTransaction = () => {
    // Converte a string para número e remove "R$" e vírgula, se houver
    const value = parseFloat(amount.replace("R$", "").replace(",", "."));

    if (isNaN(value)) {
      alert("Por favor, insira um valor válido.");
      return;
    }

    // Atualiza o saldo e o histórico de transações
    if (transactionType === "depósito") {
      setBalance(balance + value);
      setTransactionHistory([
        ...transactionHistory,
        { type: "depósito", value, date: new Date().toLocaleString() },
      ]);
    } else if (transactionType === "transferência") {
      setBalance(balance - value);
      setTransactionHistory([
        ...transactionHistory,
        { type: "transferência", value, date: new Date().toLocaleString() },
      ]);
    }

    setAmount(""); // Limpa o campo de valor após a transação
  };

  return (
    <div className="flex flex-col items-center w-full">
      <form
        className="relative bg-background bg-cover bg-no-repeat rounded-lg grid gap-4 grid-cols-2 grid-rows-[auto_auto_auto_auto_1fr] w-2/3 p-8 max-sm:gap-2 max-sm:flex max-sm:flex-col max-sm:items-center"
      >
        <h4 className="text-xl font-bold max-sm:text-center col-span-2">
          Nova Transação
        </h4>
        <div className="col-span-2">
          <SelectorField 
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTransactionType(e.target.value as "depósito" | "transferência")} 
            value={transactionType}
          />
        </div>
        <div className="col-start-1">
          <TextField
            id="Value"
            placeholder="R$ 00,00"
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
            className="lg:border lg:border-blue lg:focus:outline-blue md:border md:border-blue md:focus:outline-blue max-sm:border max-sm:border-blue max-sm:focus:outline-blue w-4/5 max-sm:w-full"
          />
        </div>
        <div className="col-start-1">
          <Button
            text="Concluir Transação"
            className="bg-blue text-white w-4/5"
            onClick={handleTransaction}
          />
        </div>
        <div className="row-start-4 row-span-2 col-start-2 flex justify-end items-end">
          <Image
            src={transaction}
            alt="Ilustração de uma pessoa segurando um cartão gigante"
            className="lg:hidden md:w-full max-sm:w-96 max-sm:mt-8"
          />
        </div>
      </form>

      <Extrato transactions={transactionHistory} />
    </div>
  );
};

export default FormTransaction;

