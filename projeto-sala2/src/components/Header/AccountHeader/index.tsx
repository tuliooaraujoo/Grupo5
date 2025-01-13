import { IoPersonCircleOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Button from "@/components/Button";

interface AccountHeaderProps {
    setActiveComponent: (component: string) => void;
}

const AccountHeader = ({ setActiveComponent }: AccountHeaderProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const options = ['Inicial', 'Investimentos', 'Cartões', 'Serviços', 'Configurações'];

    return (
        <header className="flex justify-end max-sm:justify-between items-center h-24 p-6 gap-8 bg-blue">
            <Button
                text={menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                className="text-white text-xl sm:hidden"
                onClick={toggleMenu}
            />
            <div className="flex items-center gap-8">
                <span className="text-white text-lg">Joana Oliveira</span>
                <IoPersonCircleOutline size={40} className="text-orange" />
            </div>
            {
                menuOpen && (
                    <div className="absolute top-24 left-0 bg-lightgray p-4 shadow-lg sm:hidden">
                        {options.map((option) => (
                            <Button
                                key={option}
                                text={option}
                                onClick={() => {
                                    setActiveComponent(option);
                                    setMenuOpen(false);
                                }}
                                className="block w-full text-left py-2 px-4 hover:bg-gray"
                            />
                        ))}
                    </div>
                )
            }
        </header >
    );
};

export default AccountHeader;
