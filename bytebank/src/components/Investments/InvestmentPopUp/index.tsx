import Button from "@/components/Button";

interface InvestmentPopupProps {
  isPopupOpen: boolean;
  currentType: string | null;
  inputValue: string;
  closePopup: () => void;
  handleSubmit: () => void;
  setInputValue: (value: string) => void;
}

const InvestmentPopup: React.FC<InvestmentPopupProps> = ({
  isPopupOpen,
  currentType,
  inputValue,
  closePopup,
  handleSubmit,
  setInputValue,
}) => {
  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full">
        <h4 className="text-xl mb-4">Digite o valor para {currentType === "rendaFixa" ? "Renda Fixa" : "Renda Variável"}</h4>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full p-2 border border-gray rounded-md mb-4"
        />
        <div className="flex justify-between">
          <Button
            text="Cancelar"
            onClick={closePopup}
            className="bg-blue text-white p-2 rounded"
          />
        <Button
            text="Salvar"
            onClick={handleSubmit}
            className="bg-blue text-white p-2 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default InvestmentPopup;
