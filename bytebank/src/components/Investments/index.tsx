import { useState } from "react";
import InvestmentCard from "./InvestmentCard";
import useInvestmentPopup from "@/hooks/useInvestiment";
import InvestmentPopup from "./InvestmentPopUp";
import InvestmentCharts from "./InvestmentCharts";

const Investments = () => {
  const [investments, setInvestments] = useState([
    { type: "poupanca", value: 10000, label: "Poupança", taxa: 0.005 },
    { type: "cdb", value: 12000, label: "CDB", taxa: 0.007 },
    { type: "tesouro", value: 14000, label: "Tesouro Direto", taxa: 0.008 },
    { type: "fundos", value: 16000, label: "Fundos Imobiliários", taxa: 0.012 },
    { type: "acoes", value: 18000, label: "Ações", taxa: 0.02 },
  ]);

  const {
    isPopupOpen,
    currentType,
    inputValue,
    openPopup,
    closePopup,
    handleSubmit,
    setInputValue,
  } = useInvestmentPopup();

  const totalInvestido = investments.reduce((total, investment) => total + investment.value, 0);

  const totalEstimado = investments.reduce((total, investment) => {
    const rendimento = investment.value * ((1 + investment.taxa) ** 12 - 1);
    return total + investment.value + rendimento;
  }, 0);

  return (
    <div className="flex flex-col bg-background bg-cover rounded-lg gap-4 p-6">
      <h2 className="font-bold text-2xl text-black">Investimentos</h2>
      <h3 className="text-2xl text-blue">Total Investido: R${totalInvestido.toLocaleString()}</h3>
      <h3 className="text-lg text-green-700">Estimativa para 12 meses: R${totalEstimado.toLocaleString()}</h3>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {investments.map((investment) => (
          <InvestmentCard
            key={investment.type}
            title={investment.label}
            amount={`R$${investment.value.toLocaleString()}`}
            onClick={() => openPopup(investment.type, investment.value)}
          />
        ))}
      </div>

      <InvestmentCharts investments={investments} />

      <InvestmentPopup
        isPopupOpen={isPopupOpen}
        currentType={currentType}
        inputValue={inputValue}
        closePopup={closePopup}
        handleSubmit={() => handleSubmit(setInvestments)}
        setInputValue={setInputValue}
      />
    </div>
  );
};

export default Investments;

// import { useState, useEffect } from "react";

// import InvestmentPopup from "./InvestmentPopUp";
// import InvestmentCharts from "./InvestmentCharts";
// import InvestmentCard from "./InvestmentCard";
// import useInvestmentPopup from "@/hooks/useInvestiment";
// import { getInvestments } from "@/api/services/investment";

// const Investments = () => {
//   const [investments, setInvestments] = useState<any[] | null>(null);
//   const {
//     isPopupOpen,
//     currentType,
//     inputValue,
//     openPopup,
//     closePopup,
//     handleSubmit,
//     setInputValue,
//   } = useInvestmentPopup();

//   useEffect(() => {
//     const fetchInvestments = async () => {
//       try {
//         const data = await getInvestments();
//         setInvestments(data);
//       } catch (error) {
//         console.error("Erro ao buscar investimentos", error);
//       }
//     };
//     fetchInvestments();
//   }, []);

//   if (investments === null) {
//     return <div>Carregando investimentos...</div>;
//   }

//   const totalInvestido = investments.reduce((total, investment) => total + investment.value, 0);
//   const totalEstimado = investments.reduce((total, investment) => {
//     const rendimento = investment.value * ((1 + investment.taxa) ** 12 - 1);
//     return total + investment.value + rendimento;
//   }, 0);

//   return (
//     <div className="flex flex-col bg-background bg-cover rounded-lg gap-4 p-6">
//       <h2 className="font-bold text-2xl text-black">Investimentos</h2>
//       <h3 className="text-2xl text-blue">Total Investido: R${totalInvestido.toLocaleString()}</h3>
//       <h3 className="text-lg text-green-700">Estimativa para 12 meses: R${totalEstimado.toLocaleString()}</h3>

//       <div className="flex flex-wrap justify-center gap-2 mb-4">
//         {investments.map((investment) => (
//           <InvestmentCard
//             key={investment.type}
//             title={investment.label}
//             amount={`R$${investment.value.toLocaleString()}`}
//             onClick={() => openPopup(investment.type, investment.value)}
//           />
//         ))}
//       </div>

//       <InvestmentCharts investments={investments} />

//       <InvestmentPopup
//         isPopupOpen={isPopupOpen}
//         currentType={currentType}
//         inputValue={inputValue}
//         closePopup={closePopup}
//         handleSubmit={() => handleSubmit(setInvestments)}
//         setInputValue={setInputValue}
//       />
//     </div>
//   );
// };

// export default Investments;
