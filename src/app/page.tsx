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

          {/*              PRIMEIRO NÍVEL SEMPRE É UM ARRAY           */}
          {Object.keys(jsonText[0]).map((item, index) => (
            <div key={index}>
              <p>
                {item}:{" "}
                {typeof jsonText[0][item] === "object" &&
                  Array.isArray(jsonText[0][item]) &&
                  "["}
              </p>

              {/*            SEGUNDO NÍVEL É UM OBJETO ?                */}
              {typeof jsonText[0][item] === "object" &&
              !Array.isArray(jsonText[0][item])
                ? Object.keys(jsonText[0][item]).map((item2, index) => (
                    <div key={index} className={styles.treeDiv}>
                      <p>{item2}: </p>

                      {/*     SEGUNDO NIVEL OBJETO E TERCEIRO NÍVEL OBJETO ?                */}
                      {typeof jsonText[0][item][item2] === "object" &&
                      !Array.isArray(jsonText[0][item][item2]) ? (
                        Object.keys(jsonText[0][item][item2]).map(
                          (item, index) => (
                            <div key={index} className={styles.treeDiv}>
                              <p>{item}:</p>
                            </div>
                          )
                        )
                      ) : //   SEGUNDO NIVEL OBJETO E TERCEIRO NÍVEL UM ARRAY ?
                      typeof jsonText[0][item][item2] === "object" &&
                        Array.isArray(jsonText[0][item][item2]) ? (
                        jsonText[0][item][item2].map(
                          (item: any, index: number) => (
                            <div key={index} className={styles.treeDiv}>
                              <p>
                                {item}: {"["}
                              </p>
                            </div>
                          )
                        )
                      ) : (
                        //      SEGUNDO NIVEL OBJETO E TERCEIRO NÍVEL NUMBER OU STRING ?
                        <p className={styles.treeDiv}>
                          {typeof jsonText[0][item][item2] === "number"
                            ? jsonText[0][item][item2]
                            : typeof jsonText[0][item][item2] === "string"
                            ? `"${jsonText[0][item][item2]}"`
                            : "null"}
                        </p>
                      )}
                    </div>
                  ))
                : //             SEGUNDO NÍVEL É UM ARRAY ?
                typeof jsonText[0][item] === "object" &&
                  Array.isArray(jsonText[0][item])
                ? jsonText[0][item].map((item2: any, index: number) => (
                    <div key={index} className={styles.treeDiv}>
                      <p>{item2}</p>

                      {/*                             SEGUNDO NIVEL ARRAY E TERCEIRO NÍVEL UM OBJETO ?                            */}
                      {typeof jsonText[0][item][item2] === "object" &&
                      !Array.isArray(jsonText[0][item][item2])
                        ? Object.keys(jsonText[0][item][item2]).map(
                            (item, index) => (
                              <div key={index} className={styles.treeDiv}>
                                <p>{item}: </p>
                              </div>
                            )
                          )
                        : //                              SEGUNDO NIVEL ARRAY E TERCEIRO NÍVEL ARRAY ?
                        typeof jsonText[0][item][item2] === "object" &&
                          Array.isArray(jsonText[0][item][item2])
                        ? jsonText[0][item][item2].map(
                            (item: any, index: number) => (
                              <div key={index} className={styles.treeDiv}>
                                <p>{item}:</p>
                              </div>
                            )
                          )
                        : //                             SEGUNDO NIVEL ARRAY E TERCEIRO NÍVEL NUMBER OU STRING ?
                          jsonText[0][item][item2] && (
                            <p className={styles.treeDiv}>
                              {typeof jsonText[0][item][item2] === "number"
                                ? jsonText[0][item][item2]
                                : typeof jsonText[0][item][item2] === "string"
                                ? `"${jsonText[0][item][item2]}"`
                                : "null"}
                            </p>
                          )}
                    </div>
                  ))
                : //                              SEGUNDO NÍVEL É NUMBER OU STRING ?
                  jsonText[0][item] && (
                    <p className={styles.treeDiv}>
                      {typeof jsonText[0][item] === "number"
                        ? jsonText[0][item]
                        : typeof jsonText[0][item] === "string"
                        ? `"${jsonText[0][item]}"`
                        : "null"}
                    </p>
                  )}
              {typeof jsonText[0][item] === "object" &&
                Array.isArray(jsonText[0][item]) &&
                "]"}
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
