import image from '../images/duotone.webp'
import { Link } from "react-router-dom"
import {RiArrowDropDownLine} from 'react-icons/ri'
import { useChangeLanguage } from '../hooks/useCustomHooks'
import { changeLang} from '../hooks/globalFun'

export default function NotFound() {

    const [currentLanguage, t ] = useChangeLanguage()

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
                            <div title="Change Language" className="dropdown dropdown-end">
                                <div tabIndex="0" className="btn gap-2 btn-ghost">
                                {currentLanguage == 'en' ? <img className="w-6 h-6 rounded-lg" src={"https://flagicons.lipis.dev/flags/4x3/gb.svg"} alt="en"/> :
                                    <img className="w-6 h-6 rounded-lg" src={"https://flagicons.lipis.dev/flags/4x3/mm.svg"} alt="mm"/>}
                                    <span className="uppercase text-base hidden md:block">{currentLanguage}</span> 
                                    <RiArrowDropDownLine size={27} />
                                </div>
                                <div className="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px mt-16 w-52 overflow-y-auto shadow-2xl">
                                    <ul className="menu menu-compact gap-y-1.5 p-3" tabIndex="0">
                                        <li>
                                            <button className={currentLanguage == 'en' ? 'active text-white' : ''} onClick={()=>changeLang('en')}> 
                                                <img className="w-6 h-6 rounded-lg" src={"https://flagicons.lipis.dev/flags/4x3/gb.svg"} alt="en"/>English
                                            </button> 
                                        </li>
                                        <li>
                                            <button className={currentLanguage == 'mm' ? 'active text-white' : ''} onClick={()=>changeLang('mm')}> 
                                                <img className="w-6 h-6 rounded-lg" src={"https://flagicons.lipis.dev/flags/4x3/mm.svg"} alt="mm"/>Myanmar
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
                        <h1 className={`${currentLanguage == "en" ? "text-5xl font-bold" : "text-4xl font-semibold"}`}>{t('page_not_found')}</h1>
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