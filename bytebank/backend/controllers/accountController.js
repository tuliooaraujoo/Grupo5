let account = {
  fullName: "Usuária",
  firstName: "Joana",
  balance: 2000,
  currency: "BRL",
};

export const getAccount = (req, res) => {
  res.json(account);
};

export const updateAccount = (req, res) => {
  account = { ...account, ...req.body };
  res.status(200).json({ message: "Conta atualizada com sucesso!" });
};
