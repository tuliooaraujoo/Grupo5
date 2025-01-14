interface SelectorFieldProps {
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    value: "depósito" | "transferência";
  }
  
  const SelectorField = ({ onChange, value }: SelectorFieldProps) => {
    return (
      <select
        name="transacao"
        id="transacao"
        className="border border-blue text-base rounded-lg p-3.5 focus-blue w-4/5 max-sm:w-full"
        onChange={onChange}
        value={value}
      >
        <option value="" disabled>
          Selecione uma transação
        </option>
        <option value="depósito">Depósito</option>
        <option value="transferência">Transferência</option>
      </select>
    );
  };
  
  export default SelectorField;