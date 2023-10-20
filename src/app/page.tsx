import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>JSON Tree Viewer</h1>
      <h3 className={styles.subtitle}>Simple JSON Viewer that runs completely on-client. No data exchange</h3>
      <button className={styles.button}>Load JSON</button>
      <p className={styles.err}>Invalid file. Please load a valid JSON file.</p>
    </main>
  )
}
