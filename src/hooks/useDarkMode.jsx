import { setGlobalState, useGlobalState } from './globalState'

export default function  useDarkMode() {
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

