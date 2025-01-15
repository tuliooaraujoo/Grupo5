"use client";

import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import Button from "@/components/Button";
import ModalButtons from "@/components/Modal/ModalButtons";
import ModalApplication from "@/components/Modal/ModalApplication";
import logo_green from "../../../../public/images/logo/logo_green.svg";
import logo_icon from "../../../../public/images/logo/logo_icon.svg";
import { useMenu } from "@/hooks/useToogleMenu";

const Header = () => {
    const {menuOpen, toggleMenu} = useMenu();

    return (
        <header className="flex justify-between items-center h-24 bg-black px-4 md:px-8 lg:px-16 relative">
            <div className="flex items-center">
                <div>
                    <Image
                        src={logo_green}
                        alt="Logotipo do Bytebank na cor verde"
                        width={145}
                        height={32}
                        className="lg:block max-lg:block md:hidden sm:block max-md:absolute max-md:top-[32px] max-md:right-4"
                    />
                    <Image
                        src={logo_icon}
                        alt="Ícone do logotipo do Bytebank"
                        width={26}
                        height={26}
                        className="lg:hidden md:block max-md:hidden sm:hidden"
                    />
                </div>
                <Button
                    text={<FiMenu size={32} />}
                    className="lg:hidden md:hidden text-green"
                    onClick={toggleMenu}
                />
                <nav className={`ml-8 text-green text-lg font-semibold flex lg:gap-6 md:gap-4 ${menuOpen ? 'flex flex-col items-start absolute top-24 left-2 bg-white shadow-lg p-4 gap-2 z-50' : 'hidden'} md:flex`}>
                    <a href="#">Sobre</a>
                    <a href="#">Serviços</a>
                </nav>
            </div>
            <div className="hidden lg:block md:block sm:hidden">
                <ModalButtons variant={"header"} />
            </div>
            <ModalApplication />
        </header>
    );
};

export default Header;
