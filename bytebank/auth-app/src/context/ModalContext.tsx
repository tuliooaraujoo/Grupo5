"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextProps {
    isRegisterModalOpen: boolean;
    isLoginModalOpen: boolean;
    openRegisterModal: () => void;
    closeRegisterModal: () => void;
    openLoginModal: () => void;
    closeLoginModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const openRegisterModal = () => setIsRegisterModalOpen(true);
    const closeRegisterModal = () => setIsRegisterModalOpen(false);

    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    return (
        <ModalContext.Provider
            value={{
                isRegisterModalOpen,
                isLoginModalOpen,
                openRegisterModal,
                closeRegisterModal,
                openLoginModal,
                closeLoginModal
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};