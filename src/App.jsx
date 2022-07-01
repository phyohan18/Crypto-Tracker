import Nav from './components/Nav';
import DataTable from './components/DataTable'
import Footer from './components/Footer'
import image from './images/duotone.png'
import { setGlobalState, useGlobalState } from './state/state'
import i18n from "i18next"
import { initReactI18next } from 'react-i18next'
import { useTranslation } from 'react-i18next'
import transitionsEn from '../assets/locales/en/translation.json'
import transitionsMm from '../assets/locales/mm/translation.json'

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


export default function App() {

  const { t } = useTranslation();
  const changeCurrency = (value)=>{
      setGlobalState("defaultCurrency",value)
  }

  const [defaultCurrency] = useGlobalState("defaultCurrency")

  const changeLang = (value) =>{
    i18n.changeLanguage(value)
  }

  return (
    <div className="bg-gray-800 font-sans leading-normal tracking-norma" >    
      <Nav changeCurrency={changeCurrency} currency={defaultCurrency} changeLang={changeLang} />
      <main>
        <div className="hero text-accent-content lg:h-[50vh] h-screen ">
          <div className="h-full w-full bg-center bg-no-repeat bg-cover brightness-50" style={{ backgroundImage: `url(${image})` }} ></div>  
            <div className="text-center hero-content">
              <div className="max-w-md">
                <h1 className={`${i18n.language == "en" ? "text-5xl font-bold" : "text-4xl font-semibold"}`}>{t('keep_up_to_date')}</h1>
                <p className="py-6">
                  {t('slogan')}
                </p>
                <a href="#content" className="inline-block p-4 bg-teal-500 font-semibold text-base leading-tight uppercase rounded-lg shadow-md hover:bg-teal-600 hover:shadow-lg active:bg-teal-700 active:shadow-lg transition duration-200 ease-in-out select-none">
                {t('get_started')}
                </a>
            </div>
          </div> 
        </div>
        <DataTable currency={defaultCurrency}/>     
      </main>
      <Footer/>
    </div>
  )
}
