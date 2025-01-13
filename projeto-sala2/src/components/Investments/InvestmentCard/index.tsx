interface InvestmentCardProps {
    title: string;
    amount: string;
    onClick: () => void;
  }
  
  const InvestmentCard = ({ title, amount, onClick }: InvestmentCardProps) => (
    <div
      className="max-w-[250px] w-full flex flex-col gap-4 bg-blue rounded-lg text-center py-2 cursor-pointer"
      onClick={onClick}
    >
      <h4 className="text-white">{title}</h4>
      <span className="text-white text-xl">{amount}</span>
    </div>
  );
  
  export default InvestmentCard;