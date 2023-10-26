'use client'

import styles from "./TreeViewer.module.css";
import { TreeViewerContext } from "@/context/TreeViewerContext";
import { useContext } from "react";

export default function TreeViewComponent({}) {
    const { jsonText } = useContext(TreeViewerContext);

    return(
        <div>
            {jsonText && Object.keys(jsonText[0]).map((item, index) => (
            <div key={index}>
              <p>{item}: </p>
              {typeof jsonText[0][item] === "object" && !Array.isArray(jsonText[0][item]) ?
                Object.keys(jsonText[0][item]).map((item, index) => (
                  <div key={index} className={styles.treeDiv}>
                    <p>{item}: </p>
                  </div>
                )) : typeof jsonText[0][item] === "object" && Array.isArray(jsonText[0][item]) ?
                jsonText[0][item].map((item: any, index: number) => (
                  <div key={index} className={styles.treeDiv}>
                    <p>{item}: </p>
                  </div>
              )): <p className={styles.treeDiv}>{jsonText[0][item] ? `"${jsonText[0][item]}"` : "null"}</p> }


                {/* <pre>{JSON.stringify(jsonText[0][item], null, 2)}</pre> */}
              
              
            </div>
          ))}
        </div>
    )
}