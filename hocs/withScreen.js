import styles from './withScreen.module.css';

function WithScreen({ Component, pageProps }) {
  return (
    <div className={styles.screen}>
      <Component {...pageProps} />
    </div>
  );
}

export default WithScreen;