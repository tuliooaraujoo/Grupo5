import Advantages from '../Advantages';

const ListOfAdvantages = () => {

    const advantagesList = [
        {
            image:"gift" ,
            text: "Conta e cartão gratuitos",
            paragraph: "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
        },
        {
            image: "withdrawal",
            text: "Saques sem custo",
            paragraph: "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
        }, {
            image: "points",
            text: "Programa de pontos",
            paragraph: "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
        },
        {
            image:"devices",
            text: "Seguro Dispositivos",
            paragraph: "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="font-bold text-5">Vantagens do nosso banco:</h3>
            <div className="flex items-center justify-around flex-wrap gap-4 mb-16">
                {advantagesList.map((advantage, index) => (
                    <Advantages
                        key={index}
                        {...advantage}
                        className="max-sm:w-full"
                    />))}
            </div>
        </div>
    )
}

export default ListOfAdvantages;