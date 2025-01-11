import Button from "../Button";
import { MdClose } from "react-icons/md"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex items-center justify-center overflow-y-auto"
            onClick={onClose}
        >
            <div
                className="bg-white p-6 rounded-2 max-w-[650px] w-full h-full relative shadow-lg overflow-y-auto flex items-center justify-center flex-col gap-4 sm:w-2/4"
                onClick={(e) => e.stopPropagation()}
            >
                <Button
                    text={<MdClose />}
                    className="absolute top-2 right-2 bg-transparent border-none text-8 cursor-pointer text-black"
                    onClick={onClose}
                />
                {children}
            </div>
        </div>
    );
};

export default Modal;
