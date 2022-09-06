import { Link } from "react-router-dom"
import { AiFillCaretUp,AiFillCaretDown } from "react-icons/ai"
import NotFound from "./NotFound"
import DashboardNav from "../components/DashboardNav"
import DashboardTable from "../components/DashboardTable"
import { useEffect,useState } from "react"
import useLocalStorage from '../hooks/useLocalStorage'
import {detectProvider, getWalletAddress , getWalletStats, formatCurrency} from '../hooks/globalFun'
import { useChangeLanguage } from "../hooks/useCustomHooks"

export default function Dashboard() {

    const [ accountAddress, setAccountAddress ] = useLocalStorage('account_address', '')
    if (!accountAddress)
        return <NotFound/>
    
    const [ provider ] = useState(detectProvider())
    const [ currentLanguage , t] = useChangeLanguage()
    const [ chainInfo , setChainInfo ] = useState({
        title:null,
        symbol:null,
        currency:null,
        network:null,
        nativeBalance: null,
        priceChangePercentage: "0.00"
    })

    const fetchAddress = async () => {
        const wallet_address = await getWalletAddress(provider)
        setAccountAddress(wallet_address)    
    }

    const fetchBalances = async () => {
        const [chainInfo, nativeBalance] = await getWalletStats(provider,accountAddress)
        const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false&price_change_percentage=24h`
        const res = await  fetch(API)
        const data = await res.json()

        const coinInfo = data.filter(item => chainInfo[0].nativeCurrency.symbol.toLowerCase() == item.symbol)
        setChainInfo({
            title:chainInfo[0].name,
            symbol:chainInfo[0].nativeCurrency.symbol,
            currency: coinInfo.length > 0 ? '$' : chainInfo[0].nativeCurrency.symbol,
            network: chainInfo[0].network,
            nativeBalance : coinInfo.length > 0 ? (nativeBalance*coinInfo[0].current_price).toFixed(2) : nativeBalance.toFixed(2),
            priceChangePercentage: coinInfo.length > 0 ? coinInfo[0].price_change_percentage_24h.toFixed(2) : "0.00"
        })
    }

    useEffect(()=>{

        if(accountAddress && provider) {
            fetchBalances()
            provider.on("accountsChanged" ,fetchAddress)
            provider.on("chainChanged" , fetchBalances)
        }
        return () => {
            if(accountAddress && provider) {
                provider.removeAllListeners('accountsChanged')
                provider.removeAllListeners('chainChanged')
            }
        }
    },[accountAddress])


    return (
        <main>
            <DashboardNav accountAddress={accountAddress} currentLanguage={currentLanguage}/>
            <div className="bg-gray-100 dark:bg-gray-800 h-screen duration-75">
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
                    <div className="my-6 flex flex-col sm:flex-row items-start gap-10">
                        <div className="card w-full sm:w-auto bg-base-100 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title font-medium mb-1">
                                    Current Network
                                </h2>
                                <div className="flex flex-row items-center gap-2 mt-1">
                                    <span className="text-base">{chainInfo.title ?? 'Unknown'}</span>
                                    <div className="badge badge-outline">{chainInfo.symbol ?? '-'}</div> 
                                    {chainInfo.network ? <div className="badge badge-outline capitalize">{chainInfo.network}</div> : ''}
                                </div>
                            </div>
                        </div>
                        <div className="card w-full sm:w-auto bg-base-100 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title font-medium sm:text-sm md:text-lg mb-0.4">
                                    Total Balance <div className="tooltip tooltip-top tooltip-gray-400" data-tip="Native Balance"><div className="mt-1 btn btn-ghost text-info btn-xs btn-circle"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline h-5 w-6 stroke-gray-500 dark:stroke-gray-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div></div>
                                </h2>
                                <div className="flex md:flex-row sm:flex-col items-center gap-2  sm:text-md md:text-xl">
                                    <span className="text-[#139287]">{formatCurrency(chainInfo.nativeBalance ?? '0.00')} {chainInfo.currency ?? '$'}</span>
                                    <div className="flex flex-row items-center gap-1">
                                        {chainInfo.priceChangePercentage[0] == '-' ? <AiFillCaretDown className="mt-0.5 text-red-500"/>:<AiFillCaretUp className="mt-0.5 text-[#139287]"/>}
                                        <span className={ chainInfo.priceChangePercentage[0] == '-'? 'text-red-500' : 'text-[#139287]' }>{chainInfo.nativeBalance > 0 ? chainInfo.priceChangePercentage.replace(/\s|-/g,'') : "0.00" } %</span>
                                        <div className="badge badge-outline">24 H</div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <span className="text-xl font-bold dark:text-accent-content">Assets</span>
                    </div>
                    <DashboardTable accountAddress={accountAddress} />
                </div>
            </div>
        </main>
    )
}