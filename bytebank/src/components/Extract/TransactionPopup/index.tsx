import PopUp from "@/components/PopUp";
import useTransaction from "@/hooks/useTransaction";
import { TransactionPopupProps } from "@/interfaces/transaction";
import { useState } from "react";

const TransactionPopup = ({ transaction, onClose, onSave }: TransactionPopupProps) => {
  const [value, setValue] = useState(transaction.value.toString());
  const [type, setType] = useState<"depósito" | "transferência">(transaction.type);
  const [file, setFile] = useState<File | null>(null);

  const { handleEditTransaction } = useTransaction();

const handleSave = () => {
  const updatedValue = parseFloat(value);
  if (isNaN(updatedValue)) {
    alert("Por favor, insira um valor válido.");
    return;
  }

  handleEditTransaction({ ...transaction, value: updatedValue, type }, file);
  onClose();
};

  return (
    <PopUp isOpen={true} title="Editar Transação" onClose={onClose} onSubmit={handleSave}>
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
    </PopUp>
  );
};

export default TransactionPopup;