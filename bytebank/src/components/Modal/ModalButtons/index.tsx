import { useModal } from "@/context/ModalContext";
import Button from "@/components/Button";

interface ModalButtonsProps {
    variant: "header" | "main";
}

const ModalButtons = ({ variant }: ModalButtonsProps) => {

    const { openLoginModal, openRegisterModal } = useModal();

    return (
        <div className={`flex items-center gap-8 ${variant === 'header' ? 'header' : 'main'}`}>
            <Button
                text="Abrir conta"
                className={`py-2 px-4 rounded-2 cursor-pointer ${variant === 'header' ? 'bg-green text-white border-none' : 'bg-black text-white border-none'}`}
                onClick={openRegisterModal}
            />
            <Button
                text="Ja tenho conta"
                className={`py-2 px-4 rounded-2 cursor-pointer ${variant === 'header' ? 'bg-transparent text-green border border-green' : 'bg-transparent text-black border border-black'}`}
                onClick={openLoginModal}
            />
        </div>
    );
};

export default ModalButtons;
