import MailIcon from "../assets/MailIcon";
import WhatsAppIcon from "../assets/WhatsAppIcon";
import styles from "../pages/Home/Home.module.css";

export const Contact = () => {
  return (
    <div className={styles.container}>
      <h3>¿Listo para empezar?</h3>
      <span>Estamos a un clic de distancia.</span>
      <p>
        ¿Tienes preguntas? ¿Quieres saber más? Escríbenos y descubre cómo
        podemos ayudarte a gestionar tu propiedad en Airbnb.
      </p>
      <div className={styles.iconsContainer}>
        <button style={{ display: "flex", gap: "1rem" }}>
          <WhatsAppIcon />
          WhatsApp
        </button>
        <button style={{ display: "flex", gap: "1rem" }}>
          <MailIcon />
          Correo
        </button>
      </div>
    </div>
  );
};
