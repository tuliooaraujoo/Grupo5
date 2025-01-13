import Button from "@/components/Button";
import { MdDelete, MdEdit } from "react-icons/md";

interface Transaction {
  id?: number;
  type: "depósito" | "transferência";
  value: number;
  date: string;
  month: string;
}

interface ExtratoProps {
  transactions: Transaction[];
  onEdit: (transaction: Transaction) => void;
  onDelete: (transactionId: number) => void;
}

const Extract = ({ transactions, onEdit, onDelete }: ExtratoProps) => {

  return (
    <div className="bg-white p-6 rounded-lg">
      <h3 className="text-2xl font-bold">Extrato</h3>
      <div>
        {transactions.length === 0 ? (
          <p>Não há transações realizadas ainda.</p>
        ) : (
          <ul>
            {transactions.map((transaction) => {
              return (
                <li key={transaction.id} className="border-b-2 border-green p-4">
                  <div className="grid grid-cols-2 grid-rows-1 gap-2">
                    <div className="text-green text-sm font-semibold">
                      {transaction.month}
                    </div>
                    <div className="row-start-2">
                      {transaction.type === "depósito" ? "Depósito" : "Transferência"}
                    </div>
                    <div className="row-start-3 font-semibold">
                      R$ {transaction.value}
                    </div>
                    <div className="row-start-2 col-start-3 text-sm text-placeholder">
                    {transaction.date}
                    </div>
                    <div className="row-start-3 col-start-3 flex justify-center gap-4 text-green">
                      <Button
                        text={<MdEdit size={20} />}
                        onClick={() => onEdit(transaction)}
                      />
                      <Button
                        text={<MdDelete size={20}/>}
                        onClick={() => transaction.id && onDelete(transaction.id)}
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Extract;
