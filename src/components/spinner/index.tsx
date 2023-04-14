import styles from "./spinner.module.css";

const Spinner = () => {
  return (
    <section id={styles.container}>
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
