import { Link } from "react-router-dom"
import NotFound from "./NotFound"
import Footer from "../components/Footer"
import DashboardNav from "../components/DashboardNav"
import Section from '../components/Section'
import DashboardCards from "../components/DashboardCards"
import useLocalStorage from '../hooks/useLocalStorage'
import { useChangeLanguage } from "../hooks/useCustomHooks"
import { detectProvider } from "../hooks/globalFun"
import { useState} from "react"

export default function Dashboard() {

    const [ accountAddress, setAccountAddress ] = useLocalStorage('account_address', '')
    if (!accountAddress)
        return <NotFound/>
    
    const [ currentLanguage , t ] = useChangeLanguage()
    const [ provider ] = useState(detectProvider())

    return (
        <main className="relative min-h-screen bg-gray-100 dark:bg-gray-800 duration-75 ">
            <DashboardNav accountAddress={accountAddress} currentLanguage={currentLanguage}/>
            <div className="container mx-auto pt-16 pb-32 px-4 md:px-8">
                <div className="text-sm breadcrumbs pt-6 mb-4">
                    <ul>
                        <li>
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                {t('home')}
                            </Link>
                        </li> 
                        <li>
                            <Link to="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                {t('dashboard')}
                            </Link>
                        </li> 
                    </ul>
                </div>
                <div className="flex">
                    <h1 className="text-xl font-semibold text-gray-900  dark:text-accent-content">{t('wallet_stats')}</h1>
                </div>
                <DashboardCards accountAddress={accountAddress} setAccountAddress={setAccountAddress}  provider={provider} translation={t}/>
                <div className="flex">
                    <h1 className="text-xl font-semibold text-gray-900  dark:text-accent-content">{t('assets')}</h1>
                </div>
                <Section  accountAddress={accountAddress} provider={provider}  translation={t} className="mb-8 xl:mb-0 mx-auto mt-4"/>      
            </div>
            <div className="absolute inset-x-0 bottom-0">
               <Footer/>
            </div>
        </main>
    )
}