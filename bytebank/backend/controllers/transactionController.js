let transactions = [];

export const getTransactions = (req, res) => {
  res.json(transactions);
};

export const createTransaction = (req, res) => {
  const newTransaction = { id: transactions.length + 1, ...req.body };
  transactions.push(newTransaction);
  res.status(201).json(newTransaction);
};

export const updateTransaction = (req, res) => {
  const { id } = req.params;
  const index = transactions.findIndex((t) => t.id === Number(id));
  
  if (index === -1) {
    return res.status(404).json({ message: "Transação não encontrada" });
  }

  transactions[index] = { ...transactions[index], ...req.body };
  res.json(transactions[index]);
};

export const deleteTransaction = (req, res) => {
  const { id } = req.params;
  transactions = transactions.filter((t) => t.id !== Number(id));
  res.json({ message: "Transação excluída com sucesso!" });
};
