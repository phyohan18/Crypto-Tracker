import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'
import i18n from "i18next"
import { initReactI18next } from 'react-i18next'
import transitionsEn from '../assets/locales/en/translation.json'
import transitionsMm from '../assets/locales/mm/translation.json'
//import { MoralisProvider } from 'react-moralis'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en : { translation: transitionsEn},
      mm : { translation: transitionsMm},
    },
    lang: "en",
    fallbackLng: "en",
})

ReactDOM.createRoot(document.getElementById('root')).render(
    //<MoralisProvider serverUrl="https://isjms8b7stax.usemoralis.com:2053/server" appId="DOC7SB9jWirXFYGQOntC0rYQDgchc4Y2gEDTwkLJ">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    //</MoralisProvider>
)