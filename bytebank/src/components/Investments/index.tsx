import { useState } from "react";
import Image from "next/image";
import graphic from "../../../public/images/illustrations/graphic.svg";
import graphicSmall from "../../../public/images/illustrations/graphic_small.svg"
import InvestmentCard from "./InvestmentCard";
import useInvestmentPopup from "@/hooks/useInvestiment";
import InvestmentPopup from "./InvestmentPopUp";

const Investments = () => {
  const [rendaFixa, setRendaFixa] = useState(30000);
  const [rendaVariavel, setRendaVariavel] = useState(14000);

  const {
    isPopupOpen,
    currentType,
    inputValue,
    openPopup,
    closePopup,
    handleSubmit,
    setInputValue,
  } = useInvestmentPopup();

  const totalInvestido = rendaFixa + rendaVariavel;

  return (
    <div className="flex flex-col bg-background bg-cover rounded-lg gap-4 p-6">
      <h2 className="font-bold text-2xl text-black">Investimentos</h2>
      <h3 className="text-2xl text-blue">Total: R${totalInvestido.toLocaleString()}</h3>
      <div className="flex flex-wrap gap-4 justify-center mb-4">
        <InvestmentCard
          title="Renda Fixa"
          amount={`R$${rendaFixa.toLocaleString()}`}
          onClick={() => openPopup("rendaFixa", rendaFixa)}
        />
        <InvestmentCard
          title="Renda Variável"
          amount={`R$${rendaVariavel.toLocaleString()}`}
          onClick={() => openPopup("rendaVariavel", rendaVariavel)}
        />
      </div>
      <h3 className="text-xl">Estatísticas</h3>
      <div className="w-full bg-blue rounded-lg flex justify-center items-center p-4 self-center">
        <Image
          src={graphic}
          alt="Gráfico dos investimentos"
          width={382}
          height={152}
          className="max-sm:hidden"
        />
        <Image
          src={graphicSmall}
          alt="Gráfico dos investimentos"
          width={382}
          height={152}
          className="hidden max-sm:block"
        />
      </div>
      <InvestmentPopup
        isPopupOpen={isPopupOpen}
        currentType={currentType}
        inputValue={inputValue}
        closePopup={closePopup}
        handleSubmit={() => handleSubmit(setRendaFixa, setRendaVariavel)}
        setInputValue={setInputValue}
      />
    </div>
  );
};

export default Investments;
