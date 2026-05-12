import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div>
            <div className={styles.logo}>
              Tales<span className={styles.logoDot} />
            </div>
            <p className={styles.tag}>Personalized stories that put your child at the center of the adventure.</p>
          </div>
          <nav className={styles.links}>
            <a href="#">Privacy policy</a>
            <a href="#">Terms of service</a>
            <a href="#">Support</a>
            <a href="#">About</a>
          </nav>
        </div>
        <div className={styles.bottom}>
          <span>© 2026 Diversity Film AB · Made with care in Stockholm</span>
          <span>Built by Hyper Island Frontend Team</span>
        </div>
      </div>
    </footer>
  );
}
