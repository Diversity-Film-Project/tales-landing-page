import styles from './Hero.module.css';

function AppPreview() {
  return (
    <>
      <div className={styles.appHeader}>
        <div className={styles.appHeaderRow}>
          <div className={styles.appLogo}>
            Tales<span className={styles.appLogoDot} />
          </div>
          <svg
            className={styles.appInfoIcon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4M12 8h.01" />
          </svg>
        </div>
        <div className={styles.stepLabel}>Step 1 of 4</div>
        <div className={styles.progressTrack}>
          <div className={`${styles.progressSeg} ${styles.progressSegActive}`} />
          <div className={styles.progressSeg} />
          <div className={styles.progressSeg} />
          <div className={styles.progressSeg} />
        </div>
        <div className={styles.progressLabels}>
          <span>Photo</span>
          <span>Preferences</span>
          <span>Story</span>
          <span>Video</span>
        </div>
      </div>

      <div className={styles.appBody}>
        <div className={styles.appH2}>Add your child&apos;s photo</div>
        <div className={styles.appSub}>We&apos;ll place them as the hero of the story</div>
        <div className={styles.uploadCard}>
          <div className={styles.uploadIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="9" cy="9" r="2" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </div>
          <div className={styles.uploadTitle}>Upload a photo</div>
          <div className={styles.uploadSub}>from your library</div>
        </div>
        <div className={styles.thumb}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </div>
        <div className={styles.tipCard}>
          <div className={styles.tipTitle}>Best results</div>
          <div className={styles.tipBody}>Facing the camera, good lighting. A portrait or headshot works best.</div>
        </div>
        <button className={styles.appBtn}>Continue</button>
      </div>
    </>
  );
}

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: content */}
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowPill}>NEW</span>
              AI-powered stories where your child is the hero
            </div>
            <h1 className={styles.title}>
              Your world. Your adventure. <em>Your story.</em>
            </h1>
            <p className={styles.subtitle}>
              Upload a photo, pick a world, and we&apos;ll generate a short personalized video where your kid is the hero of their own adventure.
            </p>
            <div className={styles.ctaRow}>
              <a href="#start" className={styles.btnPrimary}>
                Try it now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="#how" className={styles.btnSecondary}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="6 4 20 12 6 20 6 4" fill="currentColor" />
                </svg>
                See how it works
              </a>
            </div>
          </div>

          {/* Right: phone mockup */}
          <div className={styles.phoneWrap}>
            <div className={`${styles.floatCard} ${styles.floatCard1}`}>
              <div className={styles.fcIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <div className={styles.fcTitle}>Photo uploaded</div>
                <div className={styles.fcSub}>Ready to go</div>
              </div>
            </div>

            <div className={`${styles.floatCard} ${styles.floatCard2}`}>
              <div className={styles.fcIcon}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
              <div>
                <div className={styles.fcTitle}>Your story is ready</div>
                <div className={styles.fcSub}>0:15 personalised</div>
              </div>
            </div>

            <div className={styles.phone}>
              <div className={styles.phoneNotch} />
              <div className={styles.phoneScreen}>
                <AppPreview />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
