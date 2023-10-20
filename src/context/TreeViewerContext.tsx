'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useEffect, useState } from "react";

type TreeViewerContextType = {
    jsonFile: File | undefined,
    setJsonFile: Dispatch<SetStateAction<File | undefined>>,
    jsonText: object | undefined,
    setJsonText: Dispatch<SetStateAction<object | undefined>>
}

export const TreeViewerContext = createContext<TreeViewerContextType>({
    jsonFile: undefined,
    setJsonFile: () => {},
    jsonText: undefined,
    setJsonText: () => {},
})

export default function TreeViewerContextProvider({ children }: { children: ReactNode }) {
    const [jsonFile, setJsonFile] = useState<File | undefined>(undefined);
    const [jsonText, setJsonText] = useState<object | undefined>(undefined);

    return(
        <TreeViewerContext.Provider value={{ jsonFile, setJsonFile, jsonText, setJsonText }}>
            {children}
        </TreeViewerContext.Provider>
    )
}