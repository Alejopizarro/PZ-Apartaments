import { useRef } from "react";
import CreateIcon from "../assets/CreateIcon";
import KeyIcon from "../assets/KeyIcon";
import RocketIcon from "../assets/RocketIcon";
import styles from "../pages/Home/Home.module.css";
import { motion, useAnimation, useInView } from "motion/react";

export const Services = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  if (isInView) {
    controls.start("visible");
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h3>Servicios diseñados para ti y tu propiedad</h3>
      <motion.div className={styles.cardContainer}>
        <motion.div
          className={styles.card}
          variants={cardVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.2 }}
        >
          <div className={styles.cardHeader}>
            <CreateIcon className={styles.icon} font-size="10em" />
          </div>
          <div className={styles.cardContent}>
            <h4>Publicación y Administración</h4>
            <p>
              Nos encargamos desde las fotos hasta la atención a los huéspedes.
            </p>
          </div>
        </motion.div>
        <motion.div
          className={styles.card}
          variants={cardVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.4 }}
        >
          <div className={styles.cardHeader}>
            <RocketIcon font-size="5em" />
          </div>
          <div className={styles.cardContent}>
            <h4>Posicionamiento y Optimización</h4>
            <p>Hacemos que tu propiedad brille en los primeros resultados.</p>
          </div>
        </motion.div>
        <motion.div
          className={styles.card}
          variants={cardVariants}
          initial="hidden"
          animate={controls}
          transition={{ delay: 0.6 }}
        >
          <div className={styles.cardHeader}>
            <KeyIcon font-size="5em" />
          </div>
          <div className={styles.cardContent}>
            <h4>Entrega y Limpieza</h4>
            <p>
              Nos encargamos de hacer la entrega de llaves y de la limpieza de
              las unidades.
            </p>
          </div>
        </motion.div>
      </motion.div>
      <button>➡️ Conoce más sobre nuestros servicios</button>
    </motion.div>
  );
};
