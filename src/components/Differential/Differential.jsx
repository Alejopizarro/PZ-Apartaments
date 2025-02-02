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
                  <span>
                    Nuestra prioridad es que tu propiedad alcance la mayor tasa
                    de ocupación al mejor precio posible.
                  </span>
                  <span>
                    Utilizamos estrategias dinámicas de precios, análisis de
                    mercado y optimización del anuncio para que destaque frente
                    a la competencia. Mejoramos la presentación con fotos de
                    alta calidad, descripciones atractivas y posicionamiento en
                    la plataforma para aumentar la visibilidad.
                  </span>
                  <span>
                    Además, ajustamos las tarifas en función de la demanda y las
                    temporadas, asegurando un equilibrio perfecto entre
                    ocupación y rentabilidad.
                  </span>
                  <span>
                    Tú solo disfrutas de los ingresos, nosotros nos ocupamos de
                    todo.
                  </span>
                  <span style={{ fontWeight: "bold" }}>
                    Pulsa sobre la tarjeta para cerrar.
                  </span>
                </>
              )}
              {selectedCard === "trato" && (
                <>
                  <h4>Trato Personalizado</h4>
                  <span>
                    Sabemos que cada propiedad y cada anfitrión son únicos, por
                    eso adaptamos nuestra gestión a tus necesidades.
                  </span>
                  <span>
                    Nos ocupamos de todo el proceso: desde la creación y
                    optimización del anuncio hasta la atención al huésped,
                    limpieza y mantenimiento.
                  </span>
                  <span>
                    Te ofrecemos un servicio a medida, transparente y flexible,
                    donde tú decides cuánto involucrarte. Nuestro equipo está
                    disponible para resolver cualquier duda y asegurarse de que
                    tu alojamiento funcione a la perfección.
                  </span>
                  <span>
                    Confía en nosotros y disfruta de la tranquilidad de saber
                    que tu propiedad está en buenas manos.
                  </span>
                  <span style={{ fontWeight: "bold" }}>
                    Pulsa sobre la tarjeta para cerrar.
                  </span>
                </>
              )}
              {selectedCard === "cobros" && (
                <>
                  <h4>Cobros Asegurados</h4>
                  <span>
                    Con nosotros, tus ingresos están garantizados. Gestionamos
                    cada reserva con procesos seguros y automatizados para
                    evitar cancelaciones, impagos o cualquier inconveniente.
                  </span>{" "}
                  <span>
                    Nos encargamos de verificar a los huéspedes, aplicar
                    políticas de cancelación y manejar cualquier incidencia para
                    que no tengas que preocuparte por nada.
                  </span>
                  <span>
                    Además, optimizamos la estrategia de precios y maximizamos
                    la ocupación para que cada mes veas reflejado el mejor
                    rendimiento posible en tu cuenta.
                  </span>
                  <span>
                    Tú solo recibes tus ganancias, sin complicaciones ni
                    sorpresas.
                  </span>
                  <span style={{ fontWeight: "bold" }}>
                    Pulsa sobre la tarjeta para cerrar.
                  </span>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
