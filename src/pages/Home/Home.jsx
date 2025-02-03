import { useRef } from "react";
import { AboutUs } from "../../components/AboutUs";
import { Contact } from "../../components/Contact/Contact";
import { Differential } from "../../components/Differential/Differential";
import { Services } from "../../components/Services";
import styles from "./Home.module.css";
import hapiness from "../../assets/hapiness.jpg";
import { motion } from "motion/react";

export const Home = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <>
      <main className={styles.mainContainer}>
        <div className={styles.contentRow}>
          <div className={styles.title}>
            <h1>
              PZ A<span className={styles.spanRed}>part</span>ments
            </h1>
            <span className={styles.spanBlack}>
              Gestores <span className={styles.spanSmall}>de alquileres</span>{" "}
              vacacionales
            </span>
          </div>
          <div className={styles.sloganContainer}>
            <span className={styles.blockOne}>
              Saca el maximo provecho a tu alojamiento
            </span>
            <span className={styles.blockTwo}>¡Sin moverte de tu casa!</span>
          </div>
        </div>
        <motion.img
          className={styles.homeImage}
          src={hapiness}
          alt="homepage"
          initial="hidden" // Estado inicial
          animate="visible" // Estado final
          variants={imageVariants} // Aplicar variantes
        />
      </main>
      <section className={styles.evenSection}>
        <AboutUs scrollToContact={scrollToContact} />
      </section>
      <section>
        <Services />
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
