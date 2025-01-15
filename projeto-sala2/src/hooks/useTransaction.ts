import { useEffect } from "react";
import {createTransaction,deleteTransaction,getTransactions, updateTransaction} from "@/api/transaction";
import useBalance from "./useBalance";
import { Transaction } from "@/interfaces/transaction";
import { formatDate } from "@/utils/DateFormatter";
import { useTransactionContext } from "@/context/TransactionContext";

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

  const { balance, updateBalanceState } = useBalance();

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
    setTransactionType(transaction.type);
  };
  

  const handleSaveEdit = async () => {
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

        const oldValue = editingTransaction.type === "depósito"
          ? editingTransaction.value
          : -editingTransaction.value;
        const newValue = transactionType === "depósito" ? value : -value;
  
        const updatedBalance = balance + (newValue - oldValue);
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
