import FormRegister from "@/components/Forms/FormRegister"
import FormLogin from "@/components/Forms/FormLogin"
import Modal from ".."
import { useModal } from "@/context/ModalContext";

const ModalApplication = () => {

    const { isLoginModalOpen, isRegisterModalOpen, closeRegisterModal, closeLoginModal} = useModal();

    return (
        <>
            <Modal isOpen={isRegisterModalOpen} onClose={closeRegisterModal}>
                <FormRegister />
            </Modal>
            <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
                <FormLogin />
            </Modal>
        </>
    )
}

export default ModalApplication;