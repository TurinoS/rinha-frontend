"use client";

import styles from "./TreeViewer.module.css";

type TreeViewProps = {
  json: string | number | Record<string, any>;
};

export default function TreeViewComponent2({ json }: TreeViewProps) {
  return (
    <div className={styles.treeMain}>
      {typeof json === "object"
        ? Object.keys(json).map((item, index) => (
            <div key={index}>
              {typeof json[item] === "object" && !Array.isArray(json[item]) ? (
                Object.keys(json).map((subItem, index) => (
                  <div key={index} className={styles.treeDiv}>
                    <p>{subItem}: </p>
                  </div>
                ))
              ) : typeof json === "object" && Array.isArray(json[item]) ? (
                json.map((subItem: any, index: number) => (
                  <div key={index} className={styles.treeDiv}>
                    <p>{`"${subItem}"`}</p>
                  </div>
                ))
              ) : typeof json[0] === "string" && (
                <p className={styles.treeDiv}>{json ? `"${json}"` : "null"}</p>
              )}
            </div>
          ))
        : Array.isArray(json) ?
          json.map((item, index) => (
            <div key={index}>
              {typeof json[item] === "object" && !Array.isArray(json[item]) ? (
                Object.keys(json[item]).map((subItem, index) => (
                  <div key={index} className={styles.treeDiv}>
                    <p>{subItem}: </p>
                  </div>
                ))
              ) : Array.isArray(json) ? (
                json.map((subItem: any, index: number) => (
                  <div key={index} className={styles.treeDiv}>
                    <p>{subItem}: </p>
                  </div>
                ))
              ) : (
                <p className={styles.treeDiv}>{ json[item] === "" ? "null" : typeof json[item] === "number" ? json[item] : typeof json === "string" && `"${json[item]}"`}</p>
              )}
            </div>
          )): <p className={styles.treeDiv}>{ json === "" ? "null" : typeof json === "number" ? json : typeof json === "string" && `"${json}"`}</p> }
    </div>
  );
}
