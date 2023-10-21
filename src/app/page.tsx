"use client";

import styles from "./TreeViewer.module.css";
import { useContext } from "react";
import { TreeViewerContext } from "@/context/TreeViewerContext";
import HomePage from "@/components/HomePage";

export default function Home() {
  const { jsonFile, jsonText } = useContext(TreeViewerContext);

  return (
    <main>
      {!jsonText ? (
        <HomePage />
      ) : (
        <div className={styles.main}>
          <h2>{jsonFile?.name}</h2>
          <pre>{JSON.stringify(jsonText, null, 2)}</pre>
        </div>
      )}
    </main>
  );
}
