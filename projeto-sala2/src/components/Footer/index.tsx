import Image from 'next/image';
import styles from './Footer.module.css';
import { FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';

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
        <footer className={styles.footer}>
            <div className={styles.container}>
                <h4>Serviços</h4>
                {services.map((service, index) => (
                    <a key={index} href={service.href}>
                        {service.label}
                    </a>
                ))}
            </div>
            <div className={styles.container}>
                <h4>Contato</h4>
                <span>0800 004 250 08</span>
                {contacts.map((contact, index) => (
                    <a key={index} href={contact.href}>
                        {contact.label}
                    </a>
                ))}
            </div>
            <div className={styles.ultimo_container}>
                <h4>Desenvolvido por Alura</h4>
                <Image
                    src="/images/logotipo/logotipo_completo_branco.svg"
                    alt="Logotipo do Bytebank"
                    width={145}
                    height={32}
                />
                <div className={styles.icons}>
                    <FaWhatsapp aria-label="WhatsApp" />
                    <FaInstagram aria-label="Instagram" />
                    <FaYoutube aria-label="YouTube" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
