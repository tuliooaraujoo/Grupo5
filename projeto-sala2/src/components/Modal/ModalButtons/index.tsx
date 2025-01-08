import { useModal } from "@/context/ModalContext";
import styles from "./ModalButtons.module.css";
import Button from "@/components/Button";

interface ModalButtonsProps {
    variant: "header" | "main";
}

const ModalButtons = ({variant}:ModalButtonsProps) => {

    const { openLoginModal, openRegisterModal } = useModal();

    return (
        <div className={`${styles.buttons} ${styles[variant]}`}>
            <Button
                className={styles.register}
                onClick={openRegisterModal}
            >
                Abrir minha conta 
            </Button>
            <Button
                className={styles.login}
                onClick={openLoginModal}
            >
                Já tenho minha conta
            </Button>
        </div>
    );
};

export default ModalButtons;