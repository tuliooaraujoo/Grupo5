import { getAccount, updateAccount } from "@/api/services/account";
import { useAccountContext } from "@/context/AccountContext";
import { useEffect } from "react";


const useAccount = () => {
  const { account, setAccount } = useAccountContext();

  useEffect(() => {
    const fetchAccount = async () => {
      try {
        const accountData = await getAccount();
        setAccount(accountData);
      } catch (error) {
        console.error("Erro ao carregar conta:", error);
      }
    };

    fetchAccount();
  }, [setAccount]);

  const updateAccountState = async (newAccount: {
    fullName: string;
    firstName: string;
    balance: number;
    currency: string;
  }) => {
    try {
      await updateAccount(newAccount);
      setAccount(newAccount);
    } catch (error) {
      console.error("Erro ao atualizar conta:", error);
    }
  };

  return { account, updateAccountState };
};

export default useAccount;
