import { useRef } from "react";
import styles from "../pages/Home/Home.module.css";
import { motion, useAnimation, useInView } from "motion/react";

// eslint-disable-next-line react/prop-types
export const AboutUs = ({ scrollToContact }) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  if (isInView) {
    controls.start("visible");
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ delay: 0.2, duration: 0.8 }}
      viewport={{ once: true }}
      className={styles.containerColor}
    >
      <h3>¡Somos el aliado local para tu alquiler vacacional!</h3>
      <span>
        Nos encargamos de gestionar pisos turisticos en la zona de{" "}
        <span style={{ color: "#c58940" }}>
          Fuengirola, Benalmadena, Mijas Costa y Marbella Este.
        </span>
      </span>
      <span>
        Asegurandote los mejores{" "}
        <span style={{ color: "#c58940" }}>resultados</span> y ofreciendo una{" "}
        <span style={{ color: "#c58940" }}>experiencia</span> de excelencia a
        los huespedes.
      </span>
      <span>
        Somos un equipo apasionado por transformar propiedades en experiencias
        inolvidables. Desde la optimización de tu perfil en Airbnb hasta la
        gestión del día a día, te ofrecemos un{" "}
        <span style={{ color: "#c58940" }}>
          servicio personalizado y cercano.
        </span>
      </span>
      <span>
        Nuestro objetivo es que disfrutes de{" "}
        <span style={{ color: "#c58940" }}>
          ingresos constantes sin preocuparte por nada.
        </span>
      </span>
      <button onClick={scrollToContact}>Quiero saber más</button>
    </motion.div>
  );
};
