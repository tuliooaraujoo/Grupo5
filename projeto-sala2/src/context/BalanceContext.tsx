import React, { createContext, useContext, useState } from "react";

interface BalanceContextType {
  balance: number;
  setBalance: React.Dispatch<React.SetStateAction<number>>;
}

const BalanceContext = createContext<BalanceContextType | undefined>(undefined);

export const BalanceProvider = ({ children }: { children: React.ReactNode }) => {
    const [balance, setBalance] = useState<number>(1000);
  
    return (
      <BalanceContext.Provider value={{ balance, setBalance }}>
        {children}
      </BalanceContext.Provider>
    );
  };

export const useBalanceContext = () => {
  const context = useContext(BalanceContext);
  if (!context) {
    throw new Error("useBalanceContext must be used within a BalanceProvider");
  }
  return context;
};