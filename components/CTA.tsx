'use client';

import { useState } from 'react';
import styles from './CTA.module.css';

// Sign up at formspree.io → create a form → paste your endpoint here
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvyyznj';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function CTA() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        const json = await res.json();
        setErrorMsg(json?.errors?.[0]?.message ?? 'Something went wrong. Please try again.');
        setStatus('error');
      }
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  }

  return (
    <section className={styles.section} id="start">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.inner}>
            <span className={styles.eyebrow}>Limited demo access</span>
            <h2 className={styles.h}>Want to try Tales first?</h2>
            <p className={styles.sub}>
              We&apos;re inviting a small group of families to test Tales before the launch.
              Leave your details and we&apos;ll send you access.
            </p>

            {status === 'success' ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div className={styles.successTitle}>Request sent!</div>
                <p className={styles.successSub}>
                  We&apos;ll email you the access link within 24 hours.
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.row}>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                    autoComplete="name"
                  />
                  <input
                    className={styles.input}
                    type="email"
                    name="email"
                    placeholder="Email address"
                    required
                    autoComplete="email"
                  />
                </div>

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? (
                    'Sending…'
                  ) : (
                    <>
                      Request demo access
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <p className={styles.error}>{errorMsg}</p>
                )}

                <p className={styles.hint}>
                  We&apos;ll get back to you within 24 hours. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
