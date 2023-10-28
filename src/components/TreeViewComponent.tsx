'use client'

import styles from "./TreeViewer.module.css";
import { TreeViewerContext } from "@/context/TreeViewerContext";
import { useContext } from "react";
import TreeViewComponent2 from "./TreeViewComponent2";

export default function TreeViewComponent({}) {
    const { jsonText } = useContext(TreeViewerContext);

    return(
        <div className={styles.treeMain}>
            {jsonText && Object.keys(jsonText[0]).map((item, index) => (
              <>
            <div key={index}>
              <p>{`${item}: ${typeof jsonText[0][item] === "object" && !Array.isArray(jsonText[0][item]) ? "{" : typeof jsonText[0][item] === "object" && Array.isArray(jsonText[0][item]) ? "[" : ""}`}</p>
              {typeof jsonText[0][item] === "object" && !Array.isArray(jsonText[0][item]) ? 
                Object.keys(jsonText[0][item]).map((subItem, subIndex) => (
                  <div key={subIndex} className={styles.treeDiv}> 
                    <p>{subItem}: </p>

                    <TreeViewComponent2 json={jsonText[0][item][subItem]} />
                    
                    </div>
                )) : typeof jsonText[0][item] === "object" && Array.isArray(jsonText[0][item]) ? 
                 jsonText[0][item].map((subItem: any, subIndex: number) => (
                  <div key={subIndex} className={styles.treeDiv}>
                    <p>{`"${subItem}"`}</p>

                    <TreeViewComponent2 json={jsonText[0][item][subItem]} />
                  </div>
              )): <p className={styles.treeDiv}>{ jsonText[0][item] === "" ? "null" : typeof jsonText[0][item] === "number" ? jsonText[0][item] : typeof jsonText[0][item] === "string" && `"${jsonText[0][item]}"`}</p> }              
            </div>
            <p>{typeof jsonText[0][item] === "object" && !Array.isArray(jsonText[0][item]) ? "}" : typeof jsonText[0][item] === "object" && Array.isArray(jsonText[0][item]) ? "]" : ""}</p>
            </>
          ))}
        </div>
    )
}