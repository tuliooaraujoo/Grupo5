import { useState, useEffect } from "react";
import { getBalance, updateBalance } from "@/api/balance";

const useBalance = () => {
  const [balance, setBalance] = useState<number>(1000);

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const balanceData = await getBalance();
        setBalance(balanceData);
      } catch (error) {
        console.error("Erro ao carregar saldo:", error);
      }
    };

    fetchBalance();
  }, []);

  const updateBalanceState = async (newBalance: number) => {
    try {
      await updateBalance(newBalance);
      setBalance(newBalance);
    } catch (error) {
      console.error("Erro ao atualizar saldo:", error);
    }
  };

  return { balance, updateBalanceState, setBalance };
};

export default useBalance;