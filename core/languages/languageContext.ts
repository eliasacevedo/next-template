import React from "react"
import { LanguageText } from "./language"
import LanguageList from './languageList.json'

const LanguageContext = React.createContext<LanguageText>({})

function getLanguageTexts(language: string): LanguageText{    
    if (!LanguageList.includes(language)) {
        throw new Error("language not found");
    }

    return require(`./list/${language}.json`) as LanguageText
}

export {
    LanguageContext,
    getLanguageTexts
}