import { useState } from "react";
import Button from "@/components/Button";
import { MdDelete, MdEdit, MdFilePresent } from "react-icons/md";
import { Transaction } from "@/interfaces/transaction";
import { TransactionFilter } from "./Filter";
import usePagination from "@/hooks/usePagination";
import PaginationControl from "./PaginationControl";
import TransactionPopup from "./TransactionPopup";
import PopUp from "../PopUp";

const itensPerPage = 4;

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

  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

  const formatTransactionDate = (dateString: string) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`).toISOString().split("T")[0];
  };

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesDate = filters.date
      ? formatTransactionDate(transaction.date) === filters.date
      : true;

    const matchesType = filters.type ? transaction.type === filters.type : true;
    const matchesMinValue = filters.minValue ? transaction.value >= parseFloat(filters.minValue) : true;
    const matchesMaxValue = filters.maxValue ? transaction.value <= parseFloat(filters.maxValue) : true;

    return matchesDate && matchesType && matchesMinValue && matchesMaxValue;
  });

  const { paginatedItems, currentPage, totalPages, goToPreviousPage, goToNextPage } = usePagination(filteredTransactions, itensPerPage);

  const [receiptUrl, setReceiptUrl] = useState<string | null>(null);

  return (
    <div className="bg-lightgray p-6 rounded-lg flex flex-col gap-4">
      <h3 className="text-2xl font-bold">Extrato</h3>
      <TransactionFilter filters={filters} setFilters={setFilters} />

      {paginatedItems.length === 0 ? (
        <p>Não há transações correspondentes.</p>
      ) : (
        <ul>
          {paginatedItems.map((transaction) => (
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
                    <button onClick={() => setReceiptUrl(transaction.receiptUrl ?? null)}>
                      <MdFilePresent size={20} />
                    </button>
                  )}
                  <Button text={<MdEdit size={20} />} onClick={() => setEditingTransaction(transaction)} />
                  <Button text={<MdDelete size={20} />} onClick={() => transaction.id && onDelete(transaction.id)} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

      {paginatedItems.length > 0 && (
        <PaginationControl
          currentPage={currentPage}
          totalPages={totalPages}
          onPrevious={goToPreviousPage}
          onNext={goToNextPage}
        />
      )}

      {editingTransaction && (
        <TransactionPopup
          transaction={editingTransaction}
          onClose={() => setEditingTransaction(null)}
          onSave={(updatedTransaction) => {
            onEdit({
              ...editingTransaction,
              ...updatedTransaction,
            });
            setEditingTransaction(null);
          }}
        />
      )}

      <PopUp
        isOpen={!!receiptUrl}
        title="Recibo"
        onClose={() => setReceiptUrl(null)}
        onSubmit={() => setReceiptUrl(null)}
        hideButtons
      >
        {receiptUrl && (
          <div className="flex justify-center items-center h-full">
            <img
              src={receiptUrl}
              alt="Recibo"
              className="max-w-full max-h-[500px]"
            />
          </div>
        )}
      </PopUp>

    </div>
  );
};

export default Extract;