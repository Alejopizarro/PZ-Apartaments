import styles from "../pages/Home/Home.module.css";

export const AboutUs = () => {
  return (
    <div className={styles.container}>
      <h3>¡Somos el aliado local para tu alquiler vacacional!</h3>
      <span>
        Nos encargamos de gestionar pisos turisticos en la zona de{" "}
        <span style={{ color: "red" }}>
          Fuengirola, Benalmadena, Mijas Costa y Marbella Este.
        </span>
      </span>
      <span>
        Asegurandote los mejores{" "}
        <span style={{ color: "red" }}>resultados</span> y ofreciendo una{" "}
        <span style={{ color: "red" }}>experiencia</span> de excelencia a los
        huespedes.
      </span>
      <span>
        Somos un equipo apasionado por transformar propiedades en experiencias
        inolvidables. Desde la optimización de tu perfil en Airbnb hasta la
        gestión del día a día, te ofrecemos un{" "}
        <span style={{ color: "red" }}>servicio personalizado y cercano.</span>
      </span>
      <span>
        Nuestro objetivo es que disfrutes de{" "}
        <span style={{ color: "red" }}>
          ingresos constantes sin preocuparte por nada.
        </span>
      </span>
    </div>
  );
};
