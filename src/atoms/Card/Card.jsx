/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import styles from "./Card.module.css";

export const Card = ({
  orientation = "vertical",
  icon,
  title,
  description,
  onClick,
  additionalContent,
}) => {
  return (
    <motion.div
      className={`${styles.card} ${
        orientation === "horizontal" ? styles.cardHorizontal : ""
      }`}
      onClick={onClick}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay: 0.2 }}
    >
      <div className={styles.cardHeader}>{icon}</div>
      <div className={styles.cardContent}>
        <h4>{title}</h4>
        <p>{description}</p>
        {additionalContent && (
          <div className={styles.additionalContent}>{additionalContent}</div>
        )}
      </div>
    </motion.div>
  );
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
