import styles from './HowItWorks.module.css';

const steps = [
  {
    num: '01',
    title: 'Add a photo',
    desc: "A single clear shot of your child's face — that's all the AI needs to make them the star.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-5-5L5 21" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Pick a world',
    desc: 'Dreamy fantasy, dragon adventure, candy kingdom, robot city — many worlds, two visual styles.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6z" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Personalise the story',
    desc: "Add a name and a sidekick. We weave them into the script so the story sounds like it's truly theirs.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Watch & share',
    desc: 'A 15-second cinematic video lands in 5–6 minutes. Download & share it with anyone in one tap.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how">
      <div className="container">
        <p className={styles.eyebrow}>How it works</p>
        <h2 className={styles.title}>Four taps. One unforgettable story.</h2>
        <p className={styles.subtitle}>From a single photo to a story video you&apos;ll want to watch again and again</p>
        <div className={styles.steps}>
          {steps.map((step) => (
            <div key={step.num} className={styles.stepCard}>
              <span className={styles.stepNum}>{step.num}</span>
              <div className={styles.stepIcon}>{step.icon}</div>
              <h3 className={styles.stepH}>{step.title}</h3>
              <p className={styles.stepP}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
