import Nav from './components/Nav';
import Footer from './components/Footer'
import Section from './components/Section';
import image from './images/duotone.webp'
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
  const changeLang = (value) =>{
    i18n.changeLanguage(value)
  }

export default function App() {

  const { t } = useTranslation();
  const changeCurrency = (value)=>{
      setGlobalState("defaultCurrency",value)
  }

  const [defaultCurrency] = useGlobalState("defaultCurrency")

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
                <label for="my-modal-4" className="btn modal-button bg-teal-500 font-semibold text-base uppercase hover:bg-teal-600  transition duration-200 ease-in-out ">{t('get_started')}</label>
            </div>
          </div> 
        </div>
        <Section/>    
      </main>
      <Footer/>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label for="my-modal-4" className="modal modal-bottom sm:modal-middle cursor-pointer duration-300 ">
        <label className="modal-box relative bg-gray-100 " for="">
          <label for="my-modal-4" className="model-action absolute right-5 top-5 font-bold cursor-pointer">✕</label>
          <h3 className="text-lg font-bold">Select your wallet </h3>
          {/* <div className="flex gap-4 bg-[#FDE3CB] rounded-xl mt-5 p-2 items-center cursor-pointer hover:bg-base-200  transition duration-200 ease-in-out">
            <div className="bg-white rounded-xl p-1.5 shadow-sm"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 212 189"><g fill="none" fill-rule="evenodd"><polygon fill="#CDBDB2" points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"/><polygon fill="#CDBDB2" points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875" transform="matrix(-1 0 0 1 256.5 0)"/><polygon fill="#393939" points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"/><polygon fill="#F89C35" points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"/><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"/><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"/><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"/><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"/><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90.563 152.438"/><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"/><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"/><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"/><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"/><polygon fill="#DFCEC3" points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"/><polygon fill="#DFCEC3" points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625" transform="matrix(-1 0 0 1 272.25 0)"/><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"/><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"/><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"/><g transform="matrix(-1 0 0 1 211.5 0)"><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"/><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"/><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"/><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"/><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90 153"/><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"/><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"/><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"/><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"/><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"/><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"/><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"/></g></g></svg>
            </div>
            <p className="text-lg font-bold text-center ">Connect Metamask</p>
          </div> */}
          <div className="flex gap-4 border-1 border-gray-400 rounded-xl mt-5 p-2 items-center cursor-pointer hover:bg-base-200  transition duration-200 ease-in-out ">
            <div className="bg-white rounded-xl p-1.5 shadow-sm"> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 212 189"><g fill="none" fill-rule="evenodd"><polygon fill="#CDBDB2" points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"/><polygon fill="#CDBDB2" points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875" transform="matrix(-1 0 0 1 256.5 0)"/><polygon fill="#393939" points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"/><polygon fill="#F89C35" points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"/><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"/><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"/><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"/><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"/><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90.563 152.438"/><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"/><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"/><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"/><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"/><polygon fill="#DFCEC3" points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"/><polygon fill="#DFCEC3" points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625" transform="matrix(-1 0 0 1 272.25 0)"/><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"/><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"/><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"/><g transform="matrix(-1 0 0 1 211.5 0)"><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"/><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"/><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"/><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"/><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90 153"/><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"/><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"/><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"/><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"/><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"/><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"/><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"/></g></g></svg>
            </div>
            <p className="text-lg font-bold text-center">Connect with Metamask</p>
          </div>
        </label>
      </label>
    </div>
  )
}
