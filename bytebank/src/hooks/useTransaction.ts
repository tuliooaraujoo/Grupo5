import { useEffect } from "react";
import {
  createTransaction,
  deleteTransaction,
  getTransactions,
  updateTransaction,
} from "@/api/services/transaction";
import { Transaction } from "@/interfaces/transaction";
import { useTransactionContext } from "@/context/TransactionContext";
import { formatDate } from "@/utils/formatters";
import useAccount from "./useAccount";
import { createClient } from "@supabase/supabase-js";

const useTransaction = () => {
  const {
    transactionHistory,
    setTransactionHistory,
    transactionType,
    setTransactionType,
    amount,
    setAmount,
    editingTransaction,
    setEditingTransaction,
  } = useTransactionContext();

  const { account, updateAccountState } = useAccount();

  // Modificação: Verificação das variáveis de ambiente antes de criar o cliente
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("As variáveis de ambiente do Supabase não estão definidas corretamente.");
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const transactionsData = await getTransactions();
        setTransactionHistory(transactionsData);
      } catch (error) {
        console.error("Erro ao carregar transações:", error);
      }
    };

    fetchTransactions();
  }, [setTransactionHistory]);

  const handleTransaction = async (file: File | null) => {
    const value = parseFloat(amount.replace("R$", "").replace(",", "."));
    if (isNaN(value)) {
      alert("Por favor, insira um valor válido.");
      return;
    }

    const currentDate = new Date();
    const { formattedDate, month } = formatDate(currentDate);
    let receiptUrl = "";

    try {
      if (file) {
        const fileName = `${new Date().getTime()}-${file.name}`;
        const { data, error } = await supabase.storage
          .from("recibos-de-transacoes")
          .upload(fileName, file);

        if (error) throw error;

        const { data: publicUrlData } = supabase.storage
          .from("recibos-de-transacoes")
          .getPublicUrl(fileName);

        receiptUrl = publicUrlData.publicUrl;
        console.log(receiptUrl);
      }

      const newTransaction: Transaction = {
        type: transactionType,
        value,
        date: formattedDate,
        month,
        receiptUrl,
      };

      let updatedBalance = account.balance;

      if (transactionType === "depósito") {
        updatedBalance += value;
      } else if (transactionType === "transferência") {
        if (value > account.balance) {
          alert("Saldo insuficiente para transferência.");
          return;
        }
        updatedBalance -= value;
      }

      const updatedAccount = { ...account, balance: updatedBalance };
      await updateAccountState(updatedAccount);

      const transactionResponse = await createTransaction(newTransaction);

      setTransactionHistory((prevState) => [
        ...prevState,
        { ...newTransaction, id: transactionResponse.id },
      ]);
    } catch (error) {
      console.error("Erro ao processar transação:", error);
    }

    setAmount("");
  };

  const handleEditTransaction = (transaction: Transaction) => {
    setEditingTransaction(transaction);
    setAmount(transaction.value.toFixed(2));
    setTransactionType(transaction.type);
  };

  const handleSaveEdit = async (transactionData: { type: "depósito" | "transferência"; amount: string; receipt: File | null; }) => {
    if (editingTransaction) {
      const value = parseFloat(amount.replace("R$", "").replace(",", "."));
      if (isNaN(value)) {
        alert("Por favor, insira um valor válido.");
        return;
      }

      try {
        const updatedTransaction: Transaction = {
          ...editingTransaction,
          value,
          type: transactionType,
        };

        await updateTransaction(editingTransaction.id!, updatedTransaction);

        setTransactionHistory((prevState) =>
          prevState.map((transaction) =>
            transaction.id === editingTransaction.id ? updatedTransaction : transaction
          )
        );

        const oldValue =
          editingTransaction.type === "depósito"
            ? editingTransaction.value
            : -editingTransaction.value;
        const newValue = transactionType === "depósito" ? value : -value;

        const updatedBalance = account.balance + (newValue - oldValue);
        const updatedAccount = { ...account, balance: updatedBalance };
        await updateAccountState(updatedAccount);

        setEditingTransaction(null);
        setAmount("");
      } catch (error) {
        console.error("Erro ao editar transação:", error);
      }
    }
  };

  const handleDeleteTransaction = async (transactionId: number) => {
    try {
      const deletedTransaction = transactionHistory.find(
        (transaction) => transaction.id === transactionId
      );

      if (deletedTransaction) {
        const updatedBalance =
          deletedTransaction.type === "depósito"
            ? account.balance - deletedTransaction.value
            : account.balance + deletedTransaction.value;

        const updatedAccount = { ...account, balance: updatedBalance };
        await updateAccountState(updatedAccount);
      }

      await deleteTransaction(transactionId);

      setTransactionHistory((prevState) =>
        prevState.filter((transaction) => transaction.id !== transactionId)
      );
    } catch (error) {
      console.error("Erro ao excluir transação:", error);
    }
  };

  return {
    transactionHistory,
    transactionType,
    setTransactionType,
    amount,
    setAmount,
    editingTransaction,
    handleTransaction,
    handleEditTransaction,
    handleSaveEdit,
    handleDeleteTransaction,
  };
};

export default useTransaction;
