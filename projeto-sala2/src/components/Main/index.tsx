"use client"

import Image from "next/image";
import styles from "./Main.module.css";
import ListOfAdvantages from "./ListOfAdvantages";
import ModalButtons from "../Modal/ModalButtons";
import ModalApplication from "../Modal/ModalApplication";

const Main = () => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p>Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!</p>
                <Image
                    src="/images/ilustrations/ilustration_main.svg"
                    alt="Ilustração da página inicial"
                    width={660}
                    height={410}
                />
            </div>
            <div>
                <ModalButtons variant={"main"} />
            </div>
            <ListOfAdvantages />
            <ModalApplication/>
        </div>
    )
}

export default Main;