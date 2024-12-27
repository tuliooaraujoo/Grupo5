import { useModal } from "@/context/ModalContext";
import styles from "./ModalButtons.module.css";

interface ModalButtonsProps {
    variant: "header" | "main";
}

const ModalButtons = ({variant}:ModalButtonsProps) => {

    const { openLoginModal, openRegisterModal } = useModal();

    return (
        <div className={`${styles.buttons} ${styles[variant]}`}>
            <button className={styles.register} onClick={openRegisterModal}>
                Abrir minha conta
            </button>
            <button className={styles.login} onClick={openLoginModal}>
                Já tenho minha conta
            </button>
        </div>
    );
};

export default ModalButtons;