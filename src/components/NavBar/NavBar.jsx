import { useEffect, useState } from "react";
import HouseIcon from "../../assets/HouseIcon";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <HouseIcon font-size="3em" />
      <div className={styles.navBarContainer}>
        <ul>
          <li>Quienes Somos</li>
          <li>Servicios</li>
          <li>Contacto</li>
        </ul>
      </div>
    </nav>
  );
};
