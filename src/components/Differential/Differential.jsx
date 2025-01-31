import { useRef, useState } from "react";
import BarsIcon from "../../assets/BarsIcon";
import DolarIcon from "../../assets/DolarIcon";
import PeopleIcon from "../../assets/PeopleIcon";
import styles from "./Differential.module.css";
import { motion, useAnimation, useInView, AnimatePresence } from "motion/react";
import earnings from "../../assets/earnings.png";
import { Card } from "../../atoms/Card/Card";

export const Differential = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true });
  const [selectedCard, setSelectedCard] = useState(null);

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
          <Card
            orientation="horizontal"
            icon={<DolarIcon />}
            title="Máxima Rentabilidad"
            description=" Nos enfoncamos en tratar de lograr la mayor tasa de ocupacion,
                  al mejor precio posible."
            additionalContent={<span>Leer más</span>}
            transition={{ delay: 0.2 }}
            onClick={() => setSelectedCard("rentabilidad")}
          />
          <Card
            orientation="horizontal"
            icon={<PeopleIcon />}
            title="Trato Personalizado"
            description="Entendemos que cada propietario es único."
            additionalContent={<span>Leer más</span>}
            transition={{ delay: 0.4 }}
            onClick={() => setSelectedCard("trato")}
          />
          <Card
            orientation="horizontal"
            icon={<BarsIcon />}
            title="Cobros Asegurados"
            description="Nosotros nos encargamos de todo, para que a ti solo te quede
                  cobrar."
            additionalContent={<span>Leer más</span>}
            transition={{ delay: 0.6 }}
            onClick={() => setSelectedCard("cobros")}
          />
        </ul>
      </motion.div>

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className={styles.expandedCard}
            layoutId={selectedCard} // Mismo layoutId que la tarjeta pequeña
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedCard(null)} // Cierra la tarjeta ampliada
          >
            <div className={styles.expandedContent}>
              {selectedCard === "rentabilidad" && (
                <>
                  <h4>Máxima Rentabilidad</h4>
                  <p>
                    Nos enfoncamos en tratar de lograr la mayor tasa de
                    ocupacion, al mejor precio posible.
                  </p>
                </>
              )}
              {selectedCard === "trato" && (
                <>
                  <h4>Trato Personalizado</h4>
                  <p>Entendemos que cada propietario es único.</p>
                </>
              )}
              {selectedCard === "cobros" && (
                <>
                  <h4>Cobros Asegurados</h4>
                  <p>
                    Nosotros nos encargamos de todo, para que a ti solo te quede
                    cobrar.
                  </p>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
