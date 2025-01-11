import BarsIcon from "../assets/BarsIcon";
import DolarIcon from "../assets/DolarIcon";
import PeopleIcon from "../assets/PeopleIcon";
import styles from "../pages/Home/Home.module.css";

export const Differential = () => {
  return (
    <div className={styles.verticalFather}>
      <h3>¿Por qué elegirnos?</h3>
      <ul className={styles.verticalContainer}>
        <li>
          <PeopleIcon font-size="10em" />
          <div className={styles.contentContainer}>
            <h4>Trato Personalizado</h4>
            <p>Entendemos que cada propietario es único.</p>
          </div>
        </li>
        <li>
          <BarsIcon font-size="10em" />
          <div className={styles.contentContainer}>
            <h4>Máxima Rentabilidad</h4>
            <p>
              Nos enfoncamos en tratar de lograr la mayor tasa de ocupacion, al
              mejor precio posible.
            </p>
          </div>
        </li>
        <li>
          <DolarIcon font-size="10em" />
          <div className={styles.contentContainer}>
            <h4>Cobros Asegurados</h4>
            <p>
              Nosotros nos encargamos de todo, para que a ti solo te quede
              cobrar.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};
