import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import styles from "./NavBar.module.css";
import WhatsAppIcon from "../../assets/WhatsAppIcon";

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
      <img src={logo} style={{ width: "3em" }} alt="logo-pz-apartments" />
      <div className={styles.navBarContainer}>
        <button>
          <WhatsAppIcon />
        </button>
      </div>
    </nav>
  );
};
