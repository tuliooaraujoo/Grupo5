import { useState } from "react";
import { Transaction } from "@/interfaces/transaction";
import Button from "@/components/Button";

interface TransactionPopupProps {
  transaction: Transaction;
  onClose: () => void;
  onSave: (updatedTransaction: {
    value: number;
    type: "depósito" | "transferência";
    date: string;
    month: string;
    receiptUrl?: string;
  }) => void;
}

const TransactionPopup = ({ transaction, onClose, onSave }: TransactionPopupProps) => {
  const [value, setValue] = useState(transaction.value.toString());
  const [type, setType] = useState<"depósito" | "transferência">(transaction.type);
  const [file, setFile] = useState<File | null>(null);

  const handleSave = async () => {
    const updatedValue = parseFloat(value);
    if (isNaN(updatedValue)) {
      alert("Por favor, insira um valor válido.");
      return;
    }
  
    let receiptUrl = transaction.receiptUrl; 
    let previousFile = transaction.receiptUrl ? transaction.receiptUrl.split("/").pop() : null;
  
    if (file) {
      if (previousFile) {
        try {
          const response = await fetch("http://localhost:3001/delete-file", {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ filename: previousFile }),
          });
  
          if (!response.ok) {
            throw new Error("Erro ao excluir o arquivo antigo.");
          }
        } catch (error) {
          console.error("Erro ao excluir o arquivo antigo:", error);
          alert("Erro ao excluir o arquivo anterior.");
          return;
        }
      }
  
      const formData = new FormData();
      formData.append("file", file);
  
      try {
        const response = await fetch("http://localhost:3001/upload", {
          method: "POST",
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error("Erro ao fazer upload do recibo.");
        }
  
        const data = await response.json();
        receiptUrl = data.fileUrl;
      } catch (error) {
        console.error("Erro no upload do recibo:", error);
        alert("Erro ao fazer upload do arquivo.");
        return;
      }
    }
  
    onSave({
      value: updatedValue,
      type,
      date: transaction.date,
      month: transaction.month,
      receiptUrl,
    });
  };
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full">
        <h2 className="text-xl mb-4">Editar Transação</h2>
        <div className="flex flex-col gap-4">
          <label>
            Valor:
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full p-2 border border-gray rounded-md mb-4"
            />
          </label>
          
          <label>
            Tipo:
            <select
              value={type}
              onChange={(e) => setType(e.target.value as "depósito" | "transferência")}
              className="w-full p-2 border border-gray rounded-md mb-4"
            >
              <option value="depósito">Depósito</option>
              <option value="transferência">Transferência</option>
            </select>
          </label>

          <label>
            Anexo:
            <input
              type="file"
              onChange={(e) => setFile(e.target.files ? e.target.files[0] : null)}
              className="w-full p-2 border border-gray rounded-md mb-4"
            />
          </label>

          <div className="flex justify-between">
            <Button
            text="Cancelar"
            onClick={onClose}
            className="bg-blue text-white p-2 rounded"
            />
            
            <Button
            text="Salvar"
            onClick={handleSave}
            className="bg-blue text-white p-2 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPopup;