import { useRef } from "react";
import BarsIcon from "../../assets/BarsIcon";
import DolarIcon from "../../assets/DolarIcon";
import PeopleIcon from "../../assets/PeopleIcon";
import styles from "./Differential.module.css";
import { motion, useAnimation, useInView } from "motion/react";
import earnings from "../../assets/earnings.png";

export const Differential = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  if (isInView) {
    controls.start("visible");
  }

  return (
    <>
      <h3>¿Por qué elegirnos?</h3>
      <motion.div
        className={styles.verticalFather}
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <img src={earnings} alt="airbnb-earning" />
        <ul className={styles.verticalContainer}>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.2 }}
          >
            <li className={styles.cardHorizontal}>
              <div className={styles.cardHeaderH}>
                <DolarIcon font-size="5em" />
              </div>
              <div className={styles.contentContainer}>
                <h4>Máxima Rentabilidad</h4>
                <p>
                  Nos enfoncamos en tratar de lograr la mayor tasa de ocupacion,
                  al mejor precio posible.
                </p>
                <span>Leer más</span>
              </div>
            </li>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.4 }}
          >
            <li className={styles.cardHorizontal}>
              <div className={styles.cardHeaderH}>
                <PeopleIcon font-size="5em" />
              </div>
              <div className={styles.contentContainer}>
                <h4>Trato Personalizado</h4>
                <p>Entendemos que cada propietario es único.</p>
              </div>
            </li>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            transition={{ delay: 0.6 }}
          >
            <li className={styles.cardHorizontal}>
              <div className={styles.cardHeaderH}>
                <BarsIcon font-size="5em" />
              </div>
              <div className={styles.contentContainer}>
                <h4>Cobros Asegurados</h4>
                <p>
                  Nosotros nos encargamos de todo, para que a ti solo te quede
                  cobrar.
                </p>
              </div>
            </li>
          </motion.div>
        </ul>
      </motion.div>
    </>
  );
};
