import CreateIcon from "../assets/CreateIcon";
import KeyIcon from "../assets/KeyIcon";
import RocketIcon from "../assets/RocketIcon";
import styles from "../pages/Home/Home.module.css";

export const Services = () => {
  return (
    <div className={styles.sectionGrid}>
      <h3>🛠️ Servicios diseñados para ti y tu propiedad</h3>
      <ul>
        <div className={styles.card}>
          <CreateIcon font-size="5em" />
          <h4>Publicacion y administracion</h4>
          <li>
            Nos encargamos de todo, desde las fotos hasta la atención a los
            huéspedes.
          </li>
        </div>
        <div className={styles.card}>
          <RocketIcon font-size="5em" />
          <h4>Posicionamiento y optimizacion</h4>
          <li>
            Optimización en Airbnb: Hacemos que tu propiedad brille en los
            primeros resultados.
          </li>
        </div>
        <div className={styles.card}>
          <KeyIcon font-size="5em" />
          <h4>Entrega y Limpieza</h4>
          <li>
            Nos encargamos de hacer la entrega de llaves y de la limpieza de las
            unidades.
          </li>
        </div>
      </ul>
      <button>➡️ Conoce más sobre nuestros servicios</button>
    </div>
  );
};
