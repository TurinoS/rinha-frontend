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

          {Object.keys(jsonText[0]).map((item, index) => (
            <div key={index}>
              <p>{item}: </p>
              <pre>{JSON.stringify(jsonText[0][item], null, 2)}</pre>
            </div>
          ))}

          
        </div>
      )}
    </main>
  );
}
