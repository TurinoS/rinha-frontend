'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [jsonFile, setJsonFile] = useState<File | undefined>(undefined);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>JSON Tree Viewer</h1>
      <h3 className={styles.subtitle}>Simple JSON Viewer that runs completely on-client. No data exchange</h3>
      <label className={styles.button} htmlFor="file" tabIndex={0}>Load JSON</label>
      <input type='file' accept='.json' name='file' id='file' className={styles.input} onChange={(e) => e.target.files && setJsonFile(e.target.files[0])} />
      {!jsonFile ? null : jsonFile.type !== "application/json" &&
        <p className={styles.err}>Invalid file. Please load a valid JSON file.</p>
      }
    </main>
  )
}
