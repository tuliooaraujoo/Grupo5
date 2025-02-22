import { useState } from "react";
import Button from "@/components/Button";
import { MdDelete, MdEdit } from "react-icons/md";
import { Transaction } from "@/interfaces/transaction";
import { TransactionFilter } from "./Filter";

interface ExtratoProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (transactionId: number) => void;
}

const Extract = ({ transactions, onEdit, onDelete }: ExtratoProps) => {
  const [filters, setFilters] = useState({
    date: "",
    type: "",
    minValue: "",
    maxValue: "",
  });

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
  
    const matchesMinValue = filters.minValue
      ? transaction.value >= parseFloat(filters.minValue)
      : true;
  
    const matchesMaxValue = filters.maxValue
      ? transaction.value <= parseFloat(filters.maxValue)
      : true;
  
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
                  <div className="col-start-3 col-end-4 row-start-3 row-end-4 flex justify-center gap-4 text-green">
                    <Button text={<MdEdit size={20} />} onClick={() => onEdit(transaction)} />
                    <Button text={<MdDelete size={20} />} onClick={() => transaction.id && onDelete(transaction.id)} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Extract;

