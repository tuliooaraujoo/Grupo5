import { useState } from "react";
import Button from "@/components/Button";
import { MdDelete, MdEdit, MdFilePresent } from "react-icons/md";
import { Transaction } from "@/interfaces/transaction";
import { TransactionFilter } from "./Filter";
import TransactionPopup from "./TransactionPopup";

interface ExtractProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (transactionId: number) => void;
}

const Extract = ({ transactions, onEdit, onDelete }: ExtractProps) => {
  const [filters, setFilters] = useState({
    date: "",
    type: "",
    minValue: "",
    maxValue: "",
  });

  // Estado para controlar o popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentTransaction, setCurrentTransaction] = useState<Transaction | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [transactionType, setTransactionType] = useState<"depósito" | "transferência">("depósito");

  // Abrir popup e preencher os dados da transação
  const openPopup = (transaction: Transaction) => {
    setCurrentTransaction(transaction);
    setInputValue(transaction.value.toString());
    setTransactionType(transaction.type as "depósito" | "transferência");
    setIsPopupOpen(true);
  };

  // Fechar popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setCurrentTransaction(null);
  };

  // Função para salvar edição
  const handleSave = () => {
    if (currentTransaction) {
      onEdit({
        ...currentTransaction,
        value: parseFloat(inputValue),
        type: transactionType,
      });
    }
    closePopup();
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const formatTransactionDate = (dateString: string) => {
      const [day, month, year] = dateString.split("/");
      const formattedMonth = month.padStart(2, "0");
      return `${year}-${formattedMonth}-${day}`;
    };

    const matchesDate = filters.date
      ? formatTransactionDate(transaction.date) === filters.date
      : true;

    const matchesType = filters.type ? transaction.type === filters.type : true;
    const matchesMinValue = filters.minValue ? transaction.value >= parseFloat(filters.minValue) : true;
    const matchesMaxValue = filters.maxValue ? transaction.value <= parseFloat(filters.maxValue) : true;

    return matchesDate && matchesType && matchesMinValue && matchesMaxValue;
  });

  return (
    <div className="bg-lightgray p-6 rounded-lg flex flex-col gap-4">
      <h3 className="text-2xl font-bold">Extrato</h3>

      <TransactionFilter filters={filters} setFilters={setFilters} />

      <div>
        {filteredTransactions.length === 0 ? (
          <p>Não há transações correspondentes.</p>
        ) : (
          <ul>
            {filteredTransactions.map((transaction) => (
              <li key={transaction.id} className="border-b-2 border-green">
                <div className="h-[100px] grid grid-cols-3 grid-rows-3 gap-2 justify-center items-center">
                  <div className="text-green text-sm font-semibold col-start-1 col-end-2 row-start-1 row-end-2">
                    {transaction.month}
                  </div>
                  <div className="col-start-1 col-end-2 row-start-2 row-end-3">
                    {transaction.type === "depósito" ? "Depósito" : "Transferência"}
                  </div>
                  <div className="col-start-1 col-end-2 row-start-3 row-end-4 text-green font-semibold">
                    R$ {transaction.value}
                  </div>
                  <div className="col-start-3 col-end-4 row-start-2 row-end-3 text-sm text-placeholder">
                    {transaction.date}
                  </div>
                  <div className="col-start-3 col-end-4 row-start-3 row-end-4 flex justify-center items-center gap-4 text-green">

                    {transaction.receiptUrl && (
                      <a href={transaction.receiptUrl} target="_blank" rel="noopener noreferrer">
                        <MdFilePresent size={20} />
                      </a>
                    )}

                    <Button text={<MdEdit size={20} />} onClick={() => openPopup(transaction)} />
                    <Button text={<MdDelete size={20} />} onClick={() => transaction.id && onDelete(transaction.id)} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <TransactionPopup
        isPopupOpen={isPopupOpen}
        transactionType={transactionType}
        inputValue={inputValue}
        closePopup={closePopup}
        handleSubmit={handleSave}
        setInputValue={setInputValue}
        setTransactionType={setTransactionType}
      />
    </div>
  );
};

export default Extract;