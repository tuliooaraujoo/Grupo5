interface TransactionPopupProps {
  isPopupOpen: boolean;
  transactionType: "depósito" | "transferência"; 
  inputValue: string;
  setInputValue: (value: string) => void;
  setTransactionType: (type: "depósito" | "transferência") => void; 
  closePopup: () => void;
  handleSubmit: () => void;
}


const TransactionPopup: React.FC<TransactionPopupProps> = ({
  isPopupOpen,
  transactionType,
  inputValue,
  setInputValue,
  setTransactionType,
  closePopup,
  handleSubmit,
}) => {
  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full">
        <h4 className="text-xl mb-4">Editar Transação</h4>

        {/* Campo de valor */}
        <label className="block mb-2">Valor:</label>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border border-gray rounded-md mb-4"
        />

        {/* Seleção do tipo de transação */}
        <label className="block mb-2">Tipo de Transação:</label>
        <select
          value={transactionType}
          onChange={(e) => setTransactionType(e.target.value as "depósito" | "transferência")}
          className="w-full p-2 border border-gray rounded-md mb-4"
        >
          <option value="depósito">Depósito</option>
          <option value="transferência">Transferência</option>
        </select>

        {/* Botões */}
        <div className="flex justify-end gap-4 mt-4">
  <button 
    onClick={closePopup} 
    className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md"
  >
    Cancelar
  </button>
  <button 
    onClick={handleSubmit} 
    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
  >
    Salvar
  </button>
</div>
      </div>
    </div>
  );
};

export default TransactionPopup;
