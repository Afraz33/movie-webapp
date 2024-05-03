import styles from "./MovieFunctions.module.css";
function MovieFunctions() {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Add a movie</button>
      <button className={styles.button}>Delete this movie</button>
    </div>
  );
}

export default MovieFunctions;
