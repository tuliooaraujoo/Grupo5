const SelectorField = () => {
    return (
        <select
            name="transacao"
            id="transacao"
            className="border border-blue text-base rounded-lg p-3.5 focus-blue"
        >
            <option value="" disabled selected>Selecione uma transação</option>
            <option value="Depósito">Depósito</option>
            <option value="Transferência">Transferência</option>
        </select>
    )
}

export default SelectorField