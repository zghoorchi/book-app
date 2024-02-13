import styles from "./SlideCard.module.css";

function SlideCard({ data }) {
  const { image, title } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{title}</p>
    </div>
  );
}

export default SlideCard;
