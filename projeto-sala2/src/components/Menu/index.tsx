import React from "react";
import Link from "next/link";
import estilos from "./Menu.module.css";

interface MenuItem {
  link: string;
  href: string;
}

interface MenuProps {
  path: string;
}

const listaMenu: MenuItem[] = [
  { link: "Início", href: "/" },
  { link: "Cartões", href: "/cartoes" },
  { link: "Serviços", href: "/servicos" },
  { link: "Investimentos", href: "/investimentos" },
];

const Menu: React.FC<MenuProps> = ({ path }) => {
  return (
    <nav className={estilos.menu}>
      {listaMenu.map((item, indice) => (
        <div key={item.href} className={estilos.item}>
          <Link href={item.href} passHref>
            <a
              className={`${estilos.link} ${
                path === item.href ? estilos.linkAtivo : ""
              }`}
            >
              {item.link}
            </a>
          </Link>
          {indice !== listaMenu.length - 1 && (
            <div className={estilos.divisor} />
          )}
        </div>
      ))}
    </nav>
  );
};

export default Menu;
