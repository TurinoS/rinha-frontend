"use client";

import styles from "./page.module.css";
import { useContext } from "react";
import { TreeViewerContext } from "@/context/TreeViewerContext";
import HomePage from "@/components/HomePage";
import TreeViewComponent from "@/components/TreeViewComponent";

export default function Home() {
  const { jsonFile, jsonText } = useContext(TreeViewerContext);

  return (
    <main>
      {!jsonText ? (
        <HomePage />
      ) : (
        <div className={styles.main}>
          <h2>{jsonFile?.name}</h2>

          <TreeViewComponent />
          
        </div>
      )}
    </main>
  );
}


          //    PRIMEIRO NÍVEL SEMPRE É UM ARRAY          
          // {Object.keys(jsonText[0]).map((item, index) => (
          //   <div key={index}>
          //     <p>
          //       {item}:{" "}
          //       {typeof jsonText[0][item] === "object" &&
          //         Array.isArray(jsonText[0][item]) &&
          //         "["}
          //     </p>

          //     {/*            SEGUNDO NÍVEL É UM OBJETO ?                */}
          //     {typeof jsonText[0][item] === "object" &&
          //     !Array.isArray(jsonText[0][item])
          //       ? Object.keys(jsonText[0][item]).map((item2, index) => (
          //           <div key={index} className={styles.treeDiv}>
          //             <p>{item2}: </p>

          //             {/*     SEGUNDO NIVEL OBJETO E TERCEIRO NÍVEL OBJETO ?                */}
          //             {typeof jsonText[0][item][item2] === "object" &&
          //             !Array.isArray(jsonText[0][item][item2]) ? (
          //               Object.keys(jsonText[0][item][item2]).map(
          //                 (item3, index) => (
          //                   <div key={index} className={styles.treeDiv}>
          //                     <p>{item3}:</p>

          //                     {/*     SEGUNDO NIVEL OBJETO, TERCEIRO NÍVEL OBJETO E QUARTO NÍVEL OBJETO ?                */}
          //                     {typeof jsonText[0][item][item2][item3] === "object" &&
          //                     !Array.isArray(jsonText[0][item][item2][item3]) ? (
          //                       Object.keys(jsonText[0][item][item2][item3]).map(
          //                         (item, index) => (
          //                           <div key={index} className={styles.treeDiv}>
          //                             <p>{item}:</p>
          //                           </div>
          //                         )
          //                       )
          //                     ) : //   SEGUNDO NIVEL OBJETO, TERCEIRO NÍVEL OBJETO E QUARTO NÍVEL ARRAY ?
          //                     typeof jsonText[0][item][item2][item3] === "object" &&
          //                       Array.isArray(jsonText[0][item][item2][item3]) ? (
          //                       jsonText[0][item][item2][item3].map(
          //                         (item: any, index: number) => (
          //                           <div key={index} className={styles.treeDiv}>
          //                             <p>
          //                               {item}: {"["}
          //                             </p>
          //                           </div>
          //                         )
          //                       )
          //                     ) : (
          //                       //      SEGUNDO NIVEL OBJETO, TERCEIRO NÍVEL OBJETO E QUARTO NÍVEL NUMBER OU STRING ?
          //                       <p className={styles.treeDiv}>
          //                         {typeof jsonText[0][item][item2][item3] === "number"
          //                           ? jsonText[0][item][item2][item3]
          //                           : typeof jsonText[0][item][item2][item3] ===
          //                             "string"
          //                           ? `"${jsonText[0][item][item2][item3]}"`
          //                           : "null"}
          //                       </p>
          //                     )}
          //                   </div>
          //                 )
          //               )
          //             ) : //   SEGUNDO NIVEL OBJETO E TERCEIRO NÍVEL UM ARRAY ?
          //             typeof jsonText[0][item][item2] === "object" &&
          //               Array.isArray(jsonText[0][item][item2]) ? (
          //               jsonText[0][item][item2].map(
          //                 (item: any, index: number) => (
          //                   <div key={index} className={styles.treeDiv}>
          //                     <p>
          //                       {item}: {"["}
          //                     </p>

          //                     {/*     SEGUNDO NIVEL OBJETO, TERCEIRO NÍVEL ARRAY E QUARTO NÍVEL OBJETO ?                */}
          //                     {typeof jsonText[0][item][item2] === "object" &&
          //                     !Array.isArray(jsonText[0][item][item2]) ? (
          //                       Object.keys(jsonText[0][item][item2]).map(
          //                         (item, index) => (
          //                           <div key={index} className={styles.treeDiv}>
          //                             <p>{item}:</p>
          //                           </div>
          //                         )
          //                       )
          //                     ) : //   SEGUNDO NIVEL OBJETO, TERCEIRO NÍVEL ARRAY E QUARTO NÍVEL ARRAY ?
          //                     typeof jsonText[0][item][item2] === "object" &&
          //                       Array.isArray(jsonText[0][item][item2]) ? (
          //                       jsonText[0][item][item2].map(
          //                         (item: any, index: number) => (
          //                           <div key={index} className={styles.treeDiv}>
          //                             <p>
          //                               {item}: {"["}
          //                             </p>
          //                           </div>
          //                         )
          //                       )
          //                     ) : (
          //                       //      SEGUNDO NIVEL OBJETO, TERCEIRO NÍVEL ARRAY E QUARTO NÍVEL NUMBER OU STRING ?
          //                       <p className={styles.treeDiv}>
          //                         {typeof jsonText[0][item][item2] === "number"
          //                           ? jsonText[0][item][item2]
          //                           : typeof jsonText[0][item][item2] ===
          //                             "string"
          //                           ? `"${jsonText[0][item][item2]}"`
          //                           : "null"}
          //                       </p>
          //                     )}
          //                   </div>
          //                 )
          //               )
          //             ) : (
          //               //      SEGUNDO NIVEL OBJETO E TERCEIRO NÍVEL NUMBER OU STRING ?
          //               <p className={styles.treeDiv}>
          //                 {typeof jsonText[0][item][item2] === "number"
          //                   ? jsonText[0][item][item2]
          //                   : typeof jsonText[0][item][item2] === "string"
          //                   ? `"${jsonText[0][item][item2]}"`
          //                   : "null"}
          //               </p>
          //             )}
          //           </div>
          //         ))
          //       : //             SEGUNDO NÍVEL É UM ARRAY ?
          //       typeof jsonText[0][item] === "object" &&
          //         Array.isArray(jsonText[0][item])
          //       ? jsonText[0][item].map((item2: any, index: number) => (
          //           <div key={index} className={styles.treeDiv}>
          //             <p>{item2}</p>

          //             {/*                             SEGUNDO NIVEL ARRAY E TERCEIRO NÍVEL UM OBJETO ?                            */}
          //             {typeof jsonText[0][item][item2] === "object" &&
          //             !Array.isArray(jsonText[0][item][item2])
          //               ? Object.keys(jsonText[0][item][item2]).map(
          //                   (item, index) => (
          //                     <div key={index} className={styles.treeDiv}>
          //                       <p>{item}: </p>
          //                     </div>
          //                   )
          //                 )
          //               : //                              SEGUNDO NIVEL ARRAY E TERCEIRO NÍVEL ARRAY ?
          //               typeof jsonText[0][item][item2] === "object" &&
          //                 Array.isArray(jsonText[0][item][item2])
          //               ? jsonText[0][item][item2].map(
          //                   (item: any, index: number) => (
          //                     <div key={index} className={styles.treeDiv}>
          //                       <p>{item}:</p>
          //                     </div>
          //                   )
          //                 )
          //               : //                             SEGUNDO NIVEL ARRAY E TERCEIRO NÍVEL NUMBER OU STRING ?
          //                 jsonText[0][item][item2] && (
          //                   <p className={styles.treeDiv}>
          //                     {typeof jsonText[0][item][item2] === "number"
          //                       ? jsonText[0][item][item2]
          //                       : typeof jsonText[0][item][item2] === "string"
          //                       ? `"${jsonText[0][item][item2]}"`
          //                       : "null"}
          //                   </p>
          //                 )}
          //           </div>
          //         ))
          //       : //                              SEGUNDO NÍVEL É NUMBER OU STRING ?
          //         jsonText[0][item] && (
          //           <p className={styles.treeDiv}>
          //             {typeof jsonText[0][item] === "number"
          //               ? jsonText[0][item]
          //               : typeof jsonText[0][item] === "string"
          //               ? `"${jsonText[0][item]}"`
          //               : "null"}
          //           </p>
          //         )}
          //     {typeof jsonText[0][item] === "object" &&
          //       Array.isArray(jsonText[0][item]) &&
          //       "]"}
          //   </div>
          // ))}
