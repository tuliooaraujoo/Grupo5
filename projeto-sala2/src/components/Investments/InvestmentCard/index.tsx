interface InvestmentCardProps {
    title: string;
    amount: string;
    onClick: () => void;
  }
  
  const InvestmentCard = ({ title, amount, onClick }: InvestmentCardProps) => (
    <div
      className="w-[240px] md:w-[250px] lg:w-[30opx] xl:w-[350px] flex flex-col gap-4 bg-blue rounded-lg text-center py-2 cursor-pointer"
      onClick={onClick}
    >
      <h4 className="text-white">{title}</h4>
      <span className="text-white text-xl">{amount}</span>
    </div>
  );
  
  export default InvestmentCard;