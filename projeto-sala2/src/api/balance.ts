import axios from "axios";
import { BASE_URL } from "./api";

export const getBalance = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/balance`);
      return response.data.amount;
    } catch (error) {
      console.error("Erro ao carregar saldo:", error);
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