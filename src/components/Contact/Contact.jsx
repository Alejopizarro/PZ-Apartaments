import MailIcon from "../../assets/MailIcon";
import WhatsAppIcon from "../../assets/WhatsAppIcon";
import styles from "./Contact.module.css";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <div className={styles.container}>
      <h3>¿Listo para empezar?</h3>
      <p style={{ fontSize: "medium" }}>
        ¿Tienes preguntas? ¿Quieres saber más? Escríbenos y descubre cómo
        podemos ayudarte a gestionar tu propiedad en Airbnb.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.inputContainer}>
          <label>Nombre</label>
          <input defaultValue="Juan" {...register("firstName")} />
        </div>
        <div className={styles.inputContainer}>
          <label>Apellido(s)</label>
          <input defaultValue="Pérez García" {...register("secondName")} />
        </div>
        <div className={styles.inputContainer}>
          <label>Correo electronico</label>
          <input defaultValue="example@gmail.com" {...register("email")} />
        </div>
        <div className={styles.inputContainer}>
          <label>Mensaje</label>
          <input
            defaultValue="Escribe tu mensaje aquí..."
            {...register("message")}
          />
        </div>
      </form>
      <button style={{ width: "50%" }}>Contactanos</button>
      <span style={{ fontSize: "medium" }}>
        Estamos a un clic de distancia.
      </span>
    </div>
  );
};
