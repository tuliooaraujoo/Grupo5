import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const getBalance = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/balance`);
    return response.data.amount;
  } catch (error) {
    console.error("Erro ao carregar saldo:", error);
    throw error;
  }
};

export const getTransactions = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/transactions`);
    return response.data;
  } catch (error) {
    console.error("Erro ao carregar transações:", error);
    throw error;
  }
};

export const createTransaction = async (transaction: { type: string, value: number, date: string }) => {
  try {
    const response = await axios.post(`${BASE_URL}/transactions`, transaction);
    return response.data;
  } catch (error) {
    console.error("Erro ao criar transação:", error);
    throw error;
  }
};

export const updateBalance = async (amount: number) => {
  try {
    await axios.put(`${BASE_URL}/balance`, { amount });
  } catch (error) {
    console.error("Erro ao atualizar saldo:", error);
    throw error;
  }
};

export const updateTransaction = async (transactionId: number, transaction: { value: number }) => {
  try {
    await axios.put(`${BASE_URL}/transactions/${transactionId}`, transaction);
  } catch (error) {
    console.error("Erro ao atualizar transação:", error);
    throw error;
  }
};

export const deleteTransaction = async (transactionId: number) => {
  try {
    await axios.delete(`${BASE_URL}/transactions/${transactionId}`);
  } catch (error) {
    console.error("Erro ao excluir transação:", error);
    throw error;
  }
};
