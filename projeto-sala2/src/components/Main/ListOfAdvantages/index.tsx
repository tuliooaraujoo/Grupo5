import Advantages from '../Advantages';
import styles from './ListOfAdvantages.module.css';

const ListOfAdvantages = () => {

    const advantagesList = [
        {
            image: "advantages_gifts",
            text: "Conta e cartão gratuitos",
            paragraph: "Isso mesmo, nossa conta é digital, sem custo fixo e mais que isso: sem tarifa de manutenção."
        },
        {
            image: "advantages_withdrawal",
            text: "Saques sem custo",
            paragraph: "Você pode sacar gratuitamente 4x por mês de qualquer Banco 24h."
        }, {
            image: "advantages_points",
            text: "Programa de pontos",
            paragraph: "Você pode acumular pontos com suas compras no crédito sem pagar mensalidade!"
        },
        {
            image: "advantages_devices",
            text: "Seguro Dispositivos",
            paragraph: "Seus dispositivos móveis (computador e laptop) protegidos por uma mensalidade simbólica."
        }
    ];

    return (
        <div className={styles.container}>
            <h3>Vantagens do nosso banco:</h3>
            <div className={styles.advantages_list}>
                {advantagesList.map((advantage, index) => (<Advantages key={index} {...advantage} className={styles.advantages}/>))}
            </div>
        </div>
    )
}

export default ListOfAdvantages;