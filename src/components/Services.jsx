import { useRef } from "react";
import CreateIcon from "../assets/CreateIcon";
import KeyIcon from "../assets/KeyIcon";
import RocketIcon from "../assets/RocketIcon";
import styles from "../pages/Home/Home.module.css";
import { motion } from "motion/react";
import { Card } from "../atoms/Card/Card";

export const Services = () => {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={styles.container}
    >
      <h3>Servicios diseñados para ti y tu propiedad</h3>
      <motion.div className={styles.cardContainer}>
        <Card
          orientation="vertical"
          icon={<CreateIcon />}
          title="Publicación y Administración"
          description="Nos encargamos de todo, desde las fotos hasta la atención a los huéspedes."
        />
        <Card
          orientation="vertical"
          icon={<RocketIcon />}
          title="Posicionamiento y Optimización"
          description="Hacemos que tu propiedad aparezca primera en las busquedas."
        />
        <Card
          orientation="vertical"
          icon={<KeyIcon />}
          title="Entrega y Limpieza"
          description="Nos encargamos de hacer la entrega de llaves y de la limpieza de las unidades."
        />
      </motion.div>
      <button>Conoce más sobre nuestros servicios</button>
    </motion.div>
  );
};
