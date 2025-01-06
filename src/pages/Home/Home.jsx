import { useRef } from "react";
import { AboutUs } from "../../components/AboutUs";
import { Contact } from "../../components/Contact";
import { Differential } from "../../components/Differential";
import { Services } from "../../components/Services";
import styles from "./Home.module.css";
import hapiness from "../../assets/hapiness.jpg";

export const Home = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.contentRow}>
          {/* <h3>PYZ Apartments</h3>
          <span>
            Gestores de Alquileres Vacacionales en Mijas Costa, Fuengirola,
            Benalmádena y Marbella Este.
          </span> */}
          <h1>¡Te ayudamos a sacarle el máximo provecho a tu propiedad!</h1>
          <p>
            Nos encargamos de la gestion punta a punta del alquiler,
            asegurandote los mejores resultados y ofreciendo una experiencia de
            excelencia a los huespedes.
          </p>
          <button onClick={scrollToContact}>Contactanos</button>
        </div>
        <img src={hapiness} alt="homepage" />
      </main>
      <section>
        <Services />
      </section>
      <section className={styles.evenSection}>
        <AboutUs />
      </section>
      <section>
        <Differential />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </>
  );
};
