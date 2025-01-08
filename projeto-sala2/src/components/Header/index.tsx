"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import { FiMenu } from "react-icons/fi";
import ModalButtons from "../Modal/ModalButtons";
import ModalApplication from "../Modal/ModalApplication";
import Button from "../Button";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className={styles.header}>
            <div className={styles.menu}>
                <div className={styles.logo}>
                    <Image
                        src="/images/logotipo/logo.png"
                        alt="Logotipo do Bytebank"
                        width={145}
                        height={32}
                        className={styles.logo_Full}
                    />
                    <Image
                        src="/images/logotipo/icon_logo.png"
                        alt="Logotipo do Bytebank"
                        width={26}
                        height={26}
                        className={styles.logo_Icon}
                    />
                </div>
                <Button
                    className={styles.hamburger}
                    onClick={toggleMenu}
                >
                    <FiMenu size={32} />
                </Button>
                <nav className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
                    <a href="#">Sobre</a>
                    <a href="#">Serviços</a>
                </nav>
            </div>
            <ModalButtons variant={"header"} />
            <ModalApplication />
        </header>
    );
};

export default Header;
