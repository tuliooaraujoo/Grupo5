import { useState, useEffect } from "react";
import {
  createTransaction,
  deleteTransaction,
  getTransactions,
  updateTransaction,
} from "@/api/transaction";
import useBalance from "./useBalance";

interface Transaction {
  id?: number;
  type: "depósito" | "transferência";
  value: number;
  date: string;
  month: string;
}

const useTransaction = () => {
  const { balance, updateBalanceState} = useBalance();
  const [transactionHistory, setTransactionHistory] = useState<Transaction[]>([]);
  const [transactionType, setTransactionType] = useState<"depósito" | "transferência">("depósito");
  const [amount, setAmount] = useState<string>("");
  const [editingTransaction, setEditingTransaction] = useState<Transaction | null>(null);

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
  }, []);

  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const monthNames = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro",
    ];
    const month = monthNames[monthIndex];
    return { formattedDate: `${day}/${monthIndex + 1}/${year}`, month };
  };

  const handleTransaction = async () => {
    const value = parseFloat(amount.replace("R$", "").replace(",", "."));
    if (isNaN(value)) {
      alert("Por favor, insira um valor válido.");
      return;
    }

    const currentDate = new Date();
    const { formattedDate, month } = formatDate(currentDate);

    const newTransaction: Transaction = {
      type: transactionType,
      value,
      date: formattedDate,
      month,
    };

    try {
      let updatedBalance = balance;

      if (transactionType === "depósito") {
        updatedBalance += value;
      } else if (transactionType === "transferência") {
        if (value > balance) {
          alert("Saldo insuficiente para transferência.");
          return;
        }
        updatedBalance -= value;
      }

      await updateBalanceState(updatedBalance);
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
  };

  const handleSaveEdit = async () => {
    if (editingTransaction) {
      const value = parseFloat(amount.replace("R$", "").replace(",", "."));
      if (isNaN(value)) {
        alert("Por favor, insira um valor válido.");
        return;
      }

      try {
        const updatedTransaction = { ...editingTransaction, value };

        await updateTransaction(editingTransaction.id!, updatedTransaction);

        setTransactionHistory((prevState) =>
          prevState.map((transaction) =>
            transaction.id === editingTransaction.id
              ? { ...transaction, value }
              : transaction
          )
        );

        const updatedBalance = balance - (editingTransaction.value - value);
        updateBalanceState(updatedBalance);

        setEditingTransaction(null);
        setAmount("");
      } catch (error) {
        console.error("Erro ao editar transação:", error);
      }
    }
  };

  const handleDeleteTransaction = async (transactionId: number) => {
    try {
      await deleteTransaction(transactionId);

      const deletedTransaction = transactionHistory.find(
        (transaction) => transaction.id === transactionId
      );
      if (deletedTransaction) {
        const updatedBalance =
          deletedTransaction.type === "depósito"
            ? balance - deletedTransaction.value
            : balance + deletedTransaction.value;
        updateBalanceState(updatedBalance);
      }

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