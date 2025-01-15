export interface Transaction {
    id?: number;
    type: "depósito" | "transferência";
    value: number;
    date: string;
    month: string;
  }