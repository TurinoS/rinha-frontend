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

              {typeof jsonText[0][item] === "object" &&
              !Array.isArray(jsonText[0][item]) ? (
                Object.keys(jsonText[0][item]).map((item2, index) => (
                  <div key={index} className={styles.treeDiv}>
                    <p>{item2}: </p>
                    
                    {typeof jsonText[0][item][item2] === "object" &&
                      !Array.isArray(jsonText[0][item][item2]) ? (
                        Object.keys(jsonText[0][item][item2]).map((item, index) => (
                          <div key={index} className={styles.treeDiv}>
                            <p>{item}: </p>
                          </div>
                        ))

                      ) : typeof jsonText[0][item][item2] === "object" &&
                        Array.isArray(jsonText[0][item][item2]) ? (
                        jsonText[0][item][item2].map((item: any, index: number) => (
                          <div key={index} className={styles.treeDiv}>
                            <p>{item}</p>
                          </div>
                        ))
                        
                      ) : (
                        <p className={styles.treeDiv}>
                          {jsonText[0][item][item2] ? jsonText[0][item][item2] : "null"}
                        </p>
                      )}
                    
                  </div>
                ))

              ) : typeof jsonText[0][item] === "object" &&
                Array.isArray(jsonText[0][item]) ? (
                jsonText[0][item].map((item2: any, index: number) => (
                  <div key={index} className={styles.treeDiv}>
                    <p>{item2}</p>

                    {typeof jsonText[0][item][item2] === "object" &&
                      !Array.isArray(jsonText[0][item][item2]) ? (
                        Object.keys(jsonText[0][item][item2]).map((item, index) => (
                          <div key={index} className={styles.treeDiv}>
                            <p>{item}: </p>
                          </div>
                        ))

                      ) : typeof jsonText[0][item][item2] === "object" &&
                        Array.isArray(jsonText[0][item][item2]) ? (
                        jsonText[0][item][item2].map((item: any, index: number) => (
                          <div key={index} className={styles.treeDiv}>
                            <p>{item}</p>
                          </div>
                        ))
                        
                      ) : jsonText[0][item][item2] && (
                        <p className={styles.treeDiv}>
                          {jsonText[0][item][item2] ? jsonText[0][item][item2] : "null"}
                        </p>
                      )}
                  </div>
                ))
                
              ) :jsonText[0][item] && (
                <p className={styles.treeDiv}>
                  {jsonText[0][item] ? jsonText[0][item] : "null"}
                </p>
              )}

              {/* <pre>{JSON.stringify(jsonText[0][item], null, 2)}</pre> */}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
