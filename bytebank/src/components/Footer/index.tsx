import Image from 'next/image';
import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';
import logo_white from "../../../public/images/logo/logo_white.svg";

interface LinksProps {
    label: string;
    href: string;
}

const services: LinksProps[] = [
    { label: "Conta Corrente", href: "#" },
    { label: "Conta PJ", href: "#" },
    { label: "Cartão de crédito", href: "#" },
];

const contacts: LinksProps[] = [
    { label: "meajuda@bytebank.com.br", href: "#" },
    { label: "ouvidoria@bytebank.com.br", href: "#" },
];

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 px-8 flex justify-around flex-wrap gap-8">
            <div className="w-56 flex flex-col gap-4">
                <h4 className="font-bold">Serviços</h4>
                {services.map((service, index) => (
                    <a key={index} href={service.href} className="text-white no-underline">
                        {service.label}
                    </a>
                ))}
            </div>
            <div className="w-56 flex flex-col gap-4">
                <h4 className="font-bold">Contato</h4>
                <span>0800 004 250 08</span>
                {contacts.map((contact, index) => (
                    <a key={index} href={contact.href} className="text-white no-underline">
                        {contact.label}
                    </a>
                ))}
            </div>
            <div className="w-56 flex flex-col gap-6 ml-8">
                <h4 className="font-bold">Desenvolvido por Alura</h4>
                <Image
                    src={logo_white}
                    alt="Logotipo do Bytebank na cor branca"
                    width={145}
                    height={32}
                />
                <div className="flex gap-6 text-4xl cursor-pointer">
                    <FaWhatsapp aria-label="WhatsApp" />
                    <FaInstagram aria-label="Instagram" />
                    <FaYoutube aria-label="YouTube" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
