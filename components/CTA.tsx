'use client';

import { useEffect, useRef } from 'react';
import styles from './CTA.module.css';

function QRCode() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const N = 21;
    let seed = 1337;
    const rnd = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    const isFinder = (r: number, c: number) =>
      (r < 7 && c < 7) || (r < 7 && c >= N - 7) || (r >= N - 7 && c < 7);
    const finderCell = (r: number, c: number) => {
      let lr: number, lc: number;
      if (r < 7 && c < 7) { lr = r; lc = c; }
      else if (r < 7 && c >= N - 7) { lr = r; lc = c - (N - 7); }
      else { lr = r - (N - 7); lc = c; }
      if (lr === 0 || lr === 6 || lc === 0 || lc === 6) return true;
      if (lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4) return true;
      return false;
    };

    container.innerHTML = '';
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        const cell = document.createElement('div');
        const on = isFinder(r, c) ? finderCell(r, c) : rnd() > 0.52;
        if (on) cell.className = styles.qrDot;
        container.appendChild(cell);
      }
    }
  }, []);

  return <div ref={ref} className={styles.qrCode} />;
}

export default function CTA() {
  return (
    <section className={styles.section} id="start">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.grid}>
            <div>
              <span className={styles.textEyebrow}>Limited demo access</span>
              <h2 className={styles.h}>Ready to create your first story?</h2>
              <p className={styles.sub}>It takes one photo and five minutes</p>
              <a href="#" className={styles.btn}>
                Get started
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>

            <div className={styles.qrCard}>
              <QRCode />
              <div className={styles.qrLabel}>Scan to open</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
