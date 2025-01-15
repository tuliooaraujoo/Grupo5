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
      className=" max-h-[478px] max-sm:max-h-[800px] bg-background bg-cover rounded-lg p-8 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-2"
    >
      <h4 className="text-xl font-bold max-sm:text-center">Nova Transação</h4>
      <div className="grid grid-cols-6 grid-row-3 gap-6 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-2">
        <div className="col-start-1 col-end-5 row-start-1 mt-8">
          <SelectorField
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setTransactionType(e.target.value as "depósito" | "transferência")
            }
            value={transactionType}
          />
        </div>
        <div className="col-start-1 col-end-4 row-start-2 row-end-3">
          <TextField
            id="Value"
            placeholder="R$ 00,00"
            value={amount}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmount(e.target.value)}
            className="border-blue focus:outline-blue max-sm:w-full"
          />
        </div>
        <div className="col-start-1 col-end-4 row-start-3 row-end-4">
          <Button
            text={editingTransaction ? "Salvar Edição" : "Concluir Transação"}
            className="bg-blue text-white px-10"
            onClick={editingTransaction ? handleSaveEdit : handleTransaction}
          />
        </div>
        <div className="row-start-2 row-end-5 col-start-4 col-end-7 flex justify-end items-end">
          <Image
            src={transaction}
            alt="Ilustração de uma pessoa segurando um cartão gigante"
          />
        </div>
      </div>
    </form>
  );
};

export default FormTransaction;
