import Button from "../Button";
import styles from "./Modal.module.css";
import {MdClose} from "react-icons/md"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <Button
                    className={styles.closeButton}
                    onClick={onClose}
                >
                    <MdClose />
                </Button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
