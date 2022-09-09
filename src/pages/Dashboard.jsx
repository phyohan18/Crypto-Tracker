import { Link } from "react-router-dom"
import NotFound from "./NotFound"
import DashboardNav from "../components/DashboardNav"
import DashboardTable from "../components/DashboardTable"
import Cards from "../components/Cards"

import useLocalStorage from '../hooks/useLocalStorage'
import { useChangeLanguage } from "../hooks/useCustomHooks"
import Footer from "../components/Footer"

export default function Dashboard() {

    const [ accountAddress, setAccountAddress ] = useLocalStorage('account_address', '')
    
    if (!accountAddress)
        return <NotFound/>
    
    const [ currentLanguage , t] = useChangeLanguage()
   
    return (
        <main className="bg-gray-100 dark:bg-gray-800 h-screen duration-75">
            <DashboardNav accountAddress={accountAddress} currentLanguage={currentLanguage}/>
            <div className="container mx-auto pt-16 px-8">
                <div className="text-sm breadcrumbs pt-6 mb-4">
                    <ul>
                        <li>
                            <Link to="/">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                Home
                            </Link>
                        </li> 
                        <li>
                            <Link to="">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                Dashboard
                            </Link>
                        </li> 
                    </ul>
                </div>
                <div className="flex">
                    <span className="text-xl font-bold dark:text-accent-content">Wallet Stats</span>
                </div>
                <Cards accountAddress={accountAddress} setAccountAddress={setAccountAddress} />
                <div className="flex">
                    <span className="text-xl font-bold dark:text-accent-content">Assets</span>
                </div>
                <DashboardTable accountAddress={accountAddress} />
            </div>
            <div class="absolute inset-x-0 bottom-0">
                <Footer/>
            </div>
        </main>
    )
}