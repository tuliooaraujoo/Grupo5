let investments = [
    { type: 'poupanca', value: 10000, label: 'Poupança', taxa: 0.005 },
    { type: 'cdb', value: 12000, label: 'CDB', taxa: 0.007 },
    { type: 'tesouro', value: 14000, label: 'Tesouro Direto', taxa: 0.008 },
    { type: 'fundos', value: 16000, label: 'Fundos Imobiliários', taxa: 0.012 },
    { type: 'acoes', value: 18000, label: 'Ações', taxa: 0.02 },
  ];
  
 export const getInvestments = (req, res) => {
    res.json(investments);
  };
  
  export const updateInvestmentValue = (req, res) => {
    const { type } = req.params;
    const { value } = req.body;
  
    const investmentIndex = investments.findIndex((inv) => inv.type === type);
    
    if (investmentIndex !== -1) {
      investments[investmentIndex].value = value;
      return res.json(investments[investmentIndex]);
    }
  
    res.status(404).send('Investment not found');
  };
  