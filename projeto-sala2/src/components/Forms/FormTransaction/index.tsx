import TextField from "@/components/Inputs/TextField";
import Button from "@/components/Button";
import SelectorField from "@/components/Inputs/SelectorField";
import Image from "next/image";
import transaction from "../../../../public/images/illustrations/transaction.svg";
import useTransaction from "@/hooks/useTransaction";

const FormTransaction = () => {
  const {
    transactionType,
    setTransactionType,
    amount,
    setAmount,
    editingTransaction,
    handleTransaction,
    handleSaveEdit,
  } = useTransaction();

  return (
      <form
        className="relative bg-background bg-cover rounded-lg grid gap-4 grid-cols-2 grid-rows-5 p-8  max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-2"
      >
        <h4 className="text-xl font-bold max-sm:text-center">
          Nova Transação
        </h4>
        <div className="col-span-2">
          <SelectorField
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setTransactionType(e.target.value as "depósito" | "transferência")
            }
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
            text={editingTransaction ? "Salvar Edição" : "Concluir Transação"}
            className="bg-blue text-white w-4/5"
            onClick={editingTransaction ? handleSaveEdit : handleTransaction}
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
  );
};

export default FormTransaction;
