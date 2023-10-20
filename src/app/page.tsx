import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>JSON Tree Viewer</h1>
      <h3 className={styles.subtitle}>Simple JSON Viewer that runs completely on-client. No data exchange</h3>
      <label className={styles.button} htmlFor="file" tabIndex={0}>Load JSON</label>
      <input type='file' accept='.json' name='file' id='file' className={styles.input} />
      <p className={styles.err}>Invalid file. Please load a valid JSON file.</p>
    </main>
  )
}
