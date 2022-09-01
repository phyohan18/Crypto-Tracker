import { setGlobalState, useGlobalState } from './globalState'
import i18next from "i18next"
import { useTranslation } from 'react-i18next'

const useDarkMode = () => {
    const [darkMode] = useGlobalState("darkMode")
    const toggleDarkMode = () => setGlobalState("darkMode",!darkMode)
    if (darkMode) {
        document.documentElement.setAttribute('data-theme','dark')
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.setAttribute('data-theme','emerald')
        document.documentElement.classList.remove('dark')
    }
    return [darkMode,toggleDarkMode]
}

const useChangeCurrency = () => {
    const [defaultCurrency] = useGlobalState("defaultCurrency")
    const changeCurrency = (value) => setGlobalState("defaultCurrency",value)
    return [defaultCurrency,changeCurrency]
}

const useChangeLanguage = () =>{
    const currentLanguage = i18next.language
    const {t} = useTranslation()
    return [currentLanguage , t]
}

export { useDarkMode,useChangeCurrency,useChangeLanguage }