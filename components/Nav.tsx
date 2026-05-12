import styles from './Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <div className={styles.logo}>
          Tales<span className={styles.logoDot} />
        </div>
        <div className={styles.links}>
          <a href="#how">How it works</a>
          <a href="#example">Example</a>
          <a href="#start">Get started</a>
        </div>
        <a href="#start" className={styles.cta}>Try it now</a>
      </div>
    </nav>
  );
}
