import { useEffect } from "react";
import { getBalance, updateBalance } from "@/api/balance";
import { useBalanceContext } from "@/context/BalanceContext";

const useBalance = () => {

  const {
    balance,
    setBalance
  } = useBalanceContext();

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
  }, [setBalance]);

  const updateBalanceState = async (newBalance: number) => {
    try {
      await updateBalance(newBalance);
      setBalance(newBalance);
    } catch (error) {
      console.error("Erro ao atualizar saldo:", error);
    }
  };

  return { balance, updateBalanceState };
};

export default useBalance;