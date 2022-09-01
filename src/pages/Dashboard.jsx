import { Link } from "react-router-dom"
import { AiFillCaretUp } from "react-icons/ai"
import NotFound from "./NotFound"
import DashboardNav from "../components/DashboardNav"
import DashboardTable from "../components/DashboardTable"
import { useEffect,useState } from "react"
import useLocalStorage from '../hooks/useLocalStorage'
import {detectProvider, getWalletAddress , getWalletStats} from '../hooks/globalFun'
import { useChangeLanguage } from "../hooks/useCustomHooks"
import ci from "../../assets/constants/chains.json"
import { html } from "daisyui/dist/base"

export default function Dashboard() {

    const [ accountAddress, setAccountAddress ] = useLocalStorage('account_address', '')
    if (!accountAddress)
        return <NotFound/>
    
    const [ provider ] = useState(detectProvider())
    const [ currentLanguage , t] = useChangeLanguage()
    const [ chainInfo , setChainInfo ] = useState({
        title:null,
        currency:null,
        network:null,
        nativeBlance: null
    })

    const fetchAddress = async () => {
        const wallet_address = await getWalletAddress(provider)
        setAccountAddress(wallet_address)    
    }

    const fetchBalances = async () => {
        const [chainInfo, nativeBlance] = await getWalletStats(provider,accountAddress)
        console.log(chainInfo)
        const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false&price_change_percentage=24h`
        const res = await  fetch(API)
        const data = await res.json()
      
   
        const i = [...new Set(ci.map(item=>item.nativeCurrency.symbol.toLowerCase()))]
        
        // for (let x of i){
        //     data.map(item => {
        //         if(item.symbol !== x){
        //             console.log(x)
        //         }
        //     })
        // }
        for (let x of i){
            console.log(x)
        }
        const result = data.filter(item => 'eth' == item.symbol)
        console.log(result)
        setChainInfo({
            title:chainInfo[0].name,
            currency: chainInfo[0].nativeCurrency.symbol,
            network: chainInfo[0].network,
            nativeBlance : nativeBlance
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
                                    <div className="badge badge-outline">{chainInfo.currency ?? '-'}</div> 
                                    {chainInfo.network ? <div className="badge badge-outline capitalize">{chainInfo.network}</div> : ''}
                                </div>
                            </div>
                        </div>
                        <div className="card w-full sm:w-auto bg-base-100 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title font-medium mb-0.4">
                                    Total Balance <div className="tooltip tooltip-top tooltip-gray-400" data-tip="Native Balance"><div className="mt-1 btn btn-ghost text-info btn-xs btn-circle"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline h-5 w-5 stroke-slate-700"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div></div>
                                </h2>
                                <div className="flex flex-row items-center gap-2 text-xl">
                                    <span className="text-[#139287]">{chainInfo.nativeBlance ?? '0.00'} {chainInfo.currency ?? '$'}</span>
                                    <AiFillCaretUp className="ml-1 mt-0.5 text-[#139287]"/>
                                    <span className="text-[#139287]">0.00%</span>
                                    <div className="badge badge-outline">24H</div> 
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