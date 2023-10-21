"use client";

import { useContext } from "react";
import styles from "./HomePage.module.css";
import { TreeViewerContext } from "@/context/TreeViewerContext";

export default function HomePage() {
  const { setJsonFile, jsonFile, setJsonText } = useContext(TreeViewerContext);

  if (jsonFile) {
    const reader = new FileReader();

    reader.onload = (event) => {
      if (event.target) {
        const text = event.target.result?.toString() as string;
        try {
          const jsonData = JSON.parse(text);
          setJsonText(jsonData);
        } catch (error) {
          console.error("Erro ao analisar o JSON:", error);
          setJsonText(undefined);
        }
      }
    };

    reader.readAsText(jsonFile);
  }

  return (
    <div className={styles.main}>
      <h1 className={styles.title}>JSON Tree Viewer</h1>
      <h3 className={styles.subtitle}>
        Simple JSON Viewer that runs completely on-client. No data exchange
      </h3>
      <label className={styles.button} htmlFor="file" tabIndex={0}>
        Load JSON
      </label>
      <input
        type="file"
        accept=".json"
        name="file"
        id="file"
        className={styles.input}
        onChange={(e) => e.target.files && setJsonFile(e.target.files[0])}
      />
      {!jsonFile
        ? null
        : jsonFile.type !== "application/json" && (
            <p className={styles.err}>
              Invalid file. Please load a valid JSON file.
            </p>
          )}
    </div>
  );
}
