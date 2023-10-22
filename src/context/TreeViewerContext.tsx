'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

type TreeViewerContextType = {
    jsonFile: File | undefined,
    setJsonFile: Dispatch<SetStateAction<File | undefined>>,
    jsonText: Array<any> | undefined,
    setJsonText: Dispatch<SetStateAction<Array<any> | undefined>>
}

export const TreeViewerContext = createContext<TreeViewerContextType>({
    jsonFile: undefined,
    setJsonFile: () => {},
    jsonText: undefined,
    setJsonText: () => {},
})

export default function TreeViewerContextProvider({ children }: { children: ReactNode }) {
    const [jsonFile, setJsonFile] = useState<File | undefined>(undefined);
    const [jsonText, setJsonText] = useState<Array<any> | undefined>(undefined);

    return(
        <TreeViewerContext.Provider value={{ jsonFile, setJsonFile, jsonText, setJsonText }}>
            {children}
        </TreeViewerContext.Provider>
    )
}