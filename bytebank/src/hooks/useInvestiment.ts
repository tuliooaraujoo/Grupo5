import { useState } from "react";

interface UseInvestmentPopupReturn {
  isPopupOpen: boolean;
  currentType: string | null;
  inputValue: string;
  openPopup: (type: string, initialValue: number) => void;
  closePopup: () => void;
  handleSubmit: (setInvestments: React.Dispatch<React.SetStateAction<any[]>>) => void;
  setInputValue: (value: string) => void;
}

const useInvestmentPopup = (): UseInvestmentPopupReturn => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentType, setCurrentType] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState("");

  const openPopup = (type: string, initialValue: number) => {
    setCurrentType(type);
    setInputValue(initialValue.toString());
    setIsPopupOpen(true);
  };

  const closePopup = () => setIsPopupOpen(false);

  const handleSubmit = (setInvestments: React.Dispatch<React.SetStateAction<any[]>>) => {
    setInvestments((prevInvestments) => {
      return prevInvestments.map((investment) => {
        if (investment.type === currentType) {
          return { ...investment, value: Number(inputValue) };
        }
        return investment;
      });
    });
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
