// import { useState } from "react";
// import Image from "next/image";
// import graphic from "../../../public/images/illustrations/graphic.svg";
// import graphicSmall from "../../../public/images/illustrations/graphic_small.svg"
// import InvestmentCard from "./InvestmentCard";
// import useInvestmentPopup from "@/hooks/useInvestiment";
// import InvestmentPopup from "./InvestmentPopUp";

// const Investments = () => {
//   const [rendaFixa, setRendaFixa] = useState(30000);
//   const [rendaVariavel, setRendaVariavel] = useState(14000);

//   const {
//     isPopupOpen,
//     currentType,
//     inputValue,
//     openPopup,
//     closePopup,
//     handleSubmit,
//     setInputValue,
//   } = useInvestmentPopup();

//   const totalInvestido = rendaFixa + rendaVariavel;

//   return (
//     <div className="flex flex-col bg-background bg-cover rounded-lg gap-4 p-6">
//       <h2 className="font-bold text-2xl text-black">Investimentos</h2>
//       <h3 className="text-2xl text-blue">Total: R${totalInvestido.toLocaleString()}</h3>
//       <div className="flex flex-wrap gap-4 justify-center mb-4">
//         <InvestmentCard
//           title="Renda Fixa"
//           amount={`R$${rendaFixa.toLocaleString()}`}
//           onClick={() => openPopup("rendaFixa", rendaFixa)}
//         />
//         <InvestmentCard
//           title="Renda Variável"
//           amount={`R$${rendaVariavel.toLocaleString()}`}
//           onClick={() => openPopup("rendaVariavel", rendaVariavel)}
//         />
//       </div>
//       <h3 className="text-xl">Estatísticas</h3>
//       <div className="w-full bg-blue rounded-lg flex justify-center items-center p-4 self-center">
//         <Image
//           src={graphic}
//           alt="Gráfico dos investimentos"
//           width={382}
//           height={152}
//           className="max-sm:hidden"
//         />
//         <Image
//           src={graphicSmall}
//           alt="Gráfico dos investimentos"
//           width={382}
//           height={152}
//           className="hidden max-sm:block"
//         />
//       </div>
//       <InvestmentPopup
//         isPopupOpen={isPopupOpen}
//         currentType={currentType}
//         inputValue={inputValue}
//         closePopup={closePopup}
//         handleSubmit={() => handleSubmit(setRendaFixa, setRendaVariavel)}
//         setInputValue={setInputValue}
//       />
//     </div>
//   );
// };

// export default Investments;


// import { useState } from "react";
// import { PieChart, Pie, Cell, Tooltip } from "recharts";
// import InvestmentCard from "./InvestmentCard";
// import useInvestmentPopup from "@/hooks/useInvestiment";
// import InvestmentPopup from "./InvestmentPopUp";

// const COLORS = ["#4F46E5", "#E11D48"]; // Azul e Vermelho

// const Investments = () => {
//   const [rendaFixa, setRendaFixa] = useState(30000);
//   const [rendaVariavel, setRendaVariavel] = useState(14000);

//   const {
//     isPopupOpen,
//     currentType,
//     inputValue,
//     openPopup,
//     closePopup,
//     handleSubmit,
//     setInputValue,
//   } = useInvestmentPopup();

//   const totalInvestido = rendaFixa + rendaVariavel;

//   const data = [
//     { name: "Renda Fixa", value: rendaFixa },
//     { name: "Renda Variável", value: rendaVariavel },
//   ];

//   return (
//     <div className="flex flex-col bg-background bg-cover rounded-lg gap-4 p-6">
//       <h2 className="font-bold text-2xl text-black">Investimentos</h2>
//       <h3 className="text-2xl text-blue">Total: R${totalInvestido.toLocaleString()}</h3>
//       <div className="flex flex-wrap gap-4 justify-center mb-4">
//         <InvestmentCard
//           title="Renda Fixa"
//           amount={`R$${rendaFixa.toLocaleString()}`}
//           onClick={() => openPopup("rendaFixa", rendaFixa)}
//         />
//         <InvestmentCard
//           title="Renda Variável"
//           amount={`R$${rendaVariavel.toLocaleString()}`}
//           onClick={() => openPopup("rendaVariavel", rendaVariavel)}
//         />
//       </div>
//       <h3 className="text-xl">Estatísticas</h3>
//       <div className="w-full flex justify-center items-center p-4">
//         <PieChart width={300} height={300}>
//           <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
//             {data.map((_, index) => (
//               <Cell key={`cell-${index}`} fill={COLORS[index]} />
//             ))}
//           </Pie>
//           <Tooltip />
//         </PieChart>
//       </div>
//       <InvestmentPopup
//         isPopupOpen={isPopupOpen}
//         currentType={currentType}
//         inputValue={inputValue}
//         closePopup={closePopup}
//         handleSubmit={() => handleSubmit(setRendaFixa, setRendaVariavel)}
//         setInputValue={setInputValue}
//       />
//     </div>
//   );
// };

// export default Investments;


import { useState } from "react";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import InvestmentCard from "./InvestmentCard";
import useInvestmentPopup from "@/hooks/useInvestiment";
import InvestmentPopup from "./InvestmentPopUp";

const COLORS = ["#4F46E5", "#E11D48"]; // Azul e Vermelho

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

  // Taxas médias de rendimento ao mês
  const taxaFixa = 0.007; // 0.7% ao mês
  const taxaVariavel = 0.015; // 1.5% ao mês

  // Cálculo do rendimento estimado para 12 meses
  const rendimentoFixa = rendaFixa * ((1 + taxaFixa) ** 12 - 1);
  const rendimentoVariavel = rendaVariavel * ((1 + taxaVariavel) ** 12 - 1);

  const totalEstimado = totalInvestido + rendimentoFixa + rendimentoVariavel;

  const dataPie = [
    { name: "Renda Fixa", value: rendaFixa },
    { name: "Renda Variável", value: rendaVariavel },
  ];

  const dataBar = [
    { name: "Renda Fixa", Atual: rendaFixa, Estimado: rendaFixa + rendimentoFixa },
    { name: "Renda Variável", Atual: rendaVariavel, Estimado: rendaVariavel + rendimentoVariavel },
  ];

  return (
    <div className="flex flex-col bg-background bg-cover rounded-lg gap-4 p-6">
      <h2 className="font-bold text-2xl text-black">Investimentos</h2>
      <h3 className="text-2xl text-blue">Total Investido: R${totalInvestido.toLocaleString()}</h3>
      <h3 className="text-lg text-green-700">Estimativa para 12 meses: R${totalEstimado.toLocaleString()}</h3>

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

      <h3 className="text-xl">Distribuição Atual</h3>
      <div className="w-full flex justify-center items-center p-4">
        <PieChart width={300} height={300}>
          <Pie data={dataPie} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}>
            {dataPie.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      <h3 className="text-xl">Estimativa de Crescimento em 12 Meses</h3>
      <div className="w-full flex justify-center items-center p-4">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataBar}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Atual" fill="#4F46E5" name="Atual" />
            <Bar dataKey="Estimado" fill="#16A34A" name="Estimado" />
          </BarChart>
        </ResponsiveContainer>
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
