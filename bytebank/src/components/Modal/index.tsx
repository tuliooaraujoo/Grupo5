import Button from "../Button";
import { MdClose } from "react-icons/md";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center"
            onClick={onClose}
        >
            <div
                className="bg-white relative shadow-lg sm:w-2/4 p-8 overflow-y-auto max-h-[100vh] w-full grid place-items-center"
                onClick={(e) => e.stopPropagation()}
            >
                <Button
                    text={<MdClose size={32} />}
                    className="absolute top-2 right-8 bg-transparent cursor-pointer"
                    onClick={onClose}
                />
                {children}
            </div>
        </div>
    );
};

export default Modal;


