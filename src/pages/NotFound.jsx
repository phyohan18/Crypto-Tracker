import image from '../images/duotone.webp'
import i18n from "i18next"
import { Link } from "react-router-dom"
import {RiArrowDropDownLine} from 'react-icons/ri'
import i18next from 'i18next'
import {initReactI18next, useTranslation } from 'react-i18next'
import transitionsEn from '../../assets/locales/en/translation.json'
import transitionsMm from '../../assets/locales/mm/translation.json'

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

export default function NotFound() {

    const { t } = useTranslation();

    return (
        <>
        <nav className="navbar fixed z-30 top-0 py-3 text-accent-content ease-in duration-75">
            <div className="container mx-auto px-6">
                <div className="lg:pl-3">
                    <Link className="no-underline font-extrabold text-xl" to="/">
                        <span className="text-teal-500">Crypto </span> Tracker
                    </Link>
                </div>
                <div className="flex-grow flex items-center w-auto mt-2 lg:mt-0 z-20 ">
                    <ul className="list-reset flex justify-end flex-1 items-center">
                    <li className="ml-1">
                            <div title="Change Currency" className="dropdown dropdown-end">
                                <div tabIndex="0" className="btn gap-2 upper-case btn-ghost">
                                Lang
                                </div> 
                                <div className="dropdown-content bg-base-100 text-base-content rounded-t-box rounded-b-box top-px h-auto w-52 overflow-y-auto shadow-2xl mt-16">
                                    <ul className="menu menu-compact p-4 gap-y-1.5">
                                        <li>
                                            <button class="flex" className={i18next.language == 'en' ? 'active text-white' : ''} onClick={()=>changeLang('en')}> 
                                                <span class="flex flex-1 justify-between">English </span>
                                            </button>
                                        </li>
                                        <li>
                                            <button class="flex" className={i18next.language == 'mm' ? 'active text-white' : ''} onClick={()=>changeLang('mm')}> 
                                                <span class="flex flex-1 justify-between">MM </span>
                                            </button>
                                        </li>                            
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="ml-1">
                            <div title="Change Language" className="dropdown dropdown-end">
                                <div tabIndex="0" className="btn gap-2 btn-ghost">
                                {i18next.language == 'en' ? <img className="w-6 h-6 rounded-lg" src={"https://flagicons.lipis.dev/flags/4x3/gb.svg"} alt="en"/> :
                                    <img className="w-6 h-6 rounded-lg" src={"https://flagicons.lipis.dev/flags/4x3/mm.svg"} alt="mm"/>}
                                    <span className="uppercase text-base hidden md:block">{i18next.language}</span> 
                                    <RiArrowDropDownLine size={27} />
                                </div> 
                                <div className="dropdown-content bg-base-100 text-base-content rounded-t-box rounded-b-box top-px h-auto w-52 overflow-y-auto shadow-2xl mt-16">
                                    <ul className="menu menu-compact p-4 gap-y-1.5">
                                        <li onClick={()=>changeLang('en')}><a tabIndex="0" className={i18next.language == 'en' ? 'active text-white' : ''}><img className="w-6 h-6 rounded-lg" src={"https://flagicons.lipis.dev/flags/4x3/gb.svg"} alt="en"/>English</a></li>
                                        <li onClick={()=>changeLang('mm')}><a tabIndex="0" className={i18next.language == 'mm' ? 'active text-white' : ''}><img className="w-6 h-6 rounded-lg" src={"https://flagicons.lipis.dev/flags/4x3/mm.svg"} alt="mm"/>Myanmar</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="ml-1">
                            <div title="Change Language" className="dropdown dropdown-end">
                                <div tabIndex="0" className="btn gap-1 normal-case btn-ghost">
                                {i18next.language == 'en' ? <img className="w-6 h-6 rounded-lg" src={"https://flagicons.lipis.dev/flags/4x3/gb.svg"} alt="en"/> :
                                    <img className="w-6 h-6 rounded-lg" src={"https://flagicons.lipis.dev/flags/4x3/mm.svg"} alt="mm"/>}
                                    <span className="uppercase text-base hidden md:block">{i18next.language}</span> 
                                    <RiArrowDropDownLine size={27} />
                                </div>
                                <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px mt-16 w-56 overflow-y-auto shadow-2xl">
                                    <ul className="menu menu-compact gap-1 p-3" tabindex="0">
                                        <li>
                                            <button class="flex" className={i18next.language == 'en' ? 'active text-white' : ''} onClick={()=>changeLang('en')}> 
                                                <span class="flex flex-1 justify-between">English </span>
                                            </button> 
                                        </li>
                                        <li>
                                            <button class="flex" className={i18next.language == 'mm' ? 'active text-white' : ''} onClick={()=>changeLang('mm')}> 
                                                <span class="flex flex-1 justify-between">English </span>
                                            </button> 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="ml-1">
                            <div title="Change Currency" className="dropdown dropdown-end">
                                <div tabIndex="0" className="btn gap-2 upper-case btn-ghost">
                                Lang
                                </div> 
                                <div className="dropdown-content bg-base-100 text-base-content rounded-t-box rounded-b-box top-px h-auto w-52 overflow-y-auto shadow-2xl mt-16">
                                    <ul className="menu menu-compact p-4 gap-y-1.5">
                                        <li>
                                            <button class="flex" className={i18next.language == 'en' ? 'active text-white' : ''} onClick={()=>changeLang('en')}> 
                                                <span class="flex flex-1 justify-between">English </span>
                                            </button>
                                        </li>
                                        <li>
                                            <button class="flex" className={i18next.language == 'mm' ? 'active text-white' : ''} onClick={()=>changeLang('mm')}> 
                                                <span class="flex flex-1 justify-between">MM </span>
                                            </button>
                                        </li>                            
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            <div className="hero text-accent-content h-screen ">
                <div className="h-full w-full bg-center bg-no-repeat bg-cover brightness-50" style={{ backgroundImage: `url(${image})` }} ></div>  
                <div className="text-center hero-content">
                    <div className="max-w-md">
                        <h1 className={`${i18n.language == "en" ? "text-5xl font-bold" : "text-4xl font-semibold"}`}>{t('page_not_found')}</h1>
                        <p className="py-6">
                            {t('web_url')}
                        </p>
                        <Link className="btn modal-button bg-teal-500 font-semibold text-accent-content uppercase hover:bg-teal-600 duration-200" to="/">{t('back_to_home')}</Link>
                    </div>
                </div> 
            </div>
        </>
    )
}