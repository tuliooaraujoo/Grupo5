"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import { FiMenu } from "react-icons/fi";
import ModalButtons from "../Modal/ModalButtons";
import ModalApplication from "../Modal/ModalApplication";
import Button from "../Button";

interface HeaderProps {
  isLoggedIn: boolean;
  userName?: string;
  onLogout?: () => void;
}

const Header = ({ isLoggedIn, userName, onLogout }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className={`${styles.header} ${isLoggedIn ? styles.headerLoggedIn : ""}`}
    >
      <div className={styles.menu}>
        {isLoggedIn ? (
          <UserMenu userName={userName} onLogout={onLogout} />
        ) : (
          <GuestMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
        )}
      </div>
    </header>
  );
};

export default Header;

const UserMenu = ({
  userName,
  onLogout,
}: {
  userName?: string;
  onLogout?: () => void;
}) => (
  <>
    <h1 className={styles.welcomeText}>Bem-vindo, {userName}!</h1>
    <div className={styles.userActions}>
      <span className={styles.userName}>{userName}</span>
      {onLogout && (
        <button className={styles.logoutButton} onClick={onLogout}>
          Logout
        </button>
      )}
    </div>
  </>
);

const GuestMenu = ({
  menuOpen,
  toggleMenu,
}: {
  menuOpen: boolean;
  toggleMenu: () => void;
}) => (
  <>
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
    <Button className={styles.hamburger} onClick={toggleMenu}>
      <FiMenu size={32} />
    </Button>
    <nav className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
      <a href="#">Sobre</a>
      <a href="#">Serviços</a>
    </nav>
    <ModalButtons variant="header" />
    <ModalApplication />
  </>
);
