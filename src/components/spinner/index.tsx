import styles from "./spinner.module.css";

const Spinner = () => {
  const currentUrl = window.location.href;
  return (
    <section
      id={currentUrl.includes("film") ? styles.containerFilm : styles.container}
    >
      <p id={styles.loading}>Loading</p>
      <div className={styles.waveform}>
        <div className={styles.waveform__bar}></div>
        <div className={styles.waveform__bar}></div>
        <div className={styles.waveform__bar}></div>
        <div className={styles.waveform__bar}></div>
      </div>
    </section>
  );
};

export default Spinner;
