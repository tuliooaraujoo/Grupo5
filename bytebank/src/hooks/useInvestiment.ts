import { useState } from "react";

type InvestmentType = "rendaFixa" | "rendaVariavel";

interface UseInvestmentPopupReturn {
  isPopupOpen: boolean;
  currentType: InvestmentType | null;
  inputValue: string;
  openPopup: (type: InvestmentType, initialValue: number) => void;
  closePopup: () => void;
  handleSubmit: (setRendaFixa: (value: number) => void, setRendaVariavel: (value: number) => void) => void;
  setInputValue: (value: string) => void;
}

const useInvestmentPopup = (): UseInvestmentPopupReturn => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentType, setCurrentType] = useState<InvestmentType | null>(null);
  const [inputValue, setInputValue] = useState("");

  const openPopup = (type: InvestmentType, initialValue: number) => {
    setCurrentType(type);
    setInputValue(initialValue.toString());
    setIsPopupOpen(true);
  };

  const closePopup = () => setIsPopupOpen(false);

  const handleSubmit = (
    setRendaFixa: (value: number) => void,
    setRendaVariavel: (value: number) => void
  ) => {
    if (currentType === "rendaFixa") {
      setRendaFixa(Number(inputValue));
    } else if (currentType === "rendaVariavel") {
      setRendaVariavel(Number(inputValue));
    }
    closePopup();
  };

  return {
    isPopupOpen,
    currentType,
    inputValue,
    openPopup,
    closePopup,
    handleSubmit,
    setInputValue,
  };
};

export default useInvestmentPopup;
