import { AiFillCaretUp,AiFillCaretDown } from "react-icons/ai"

import {useEffect,useState } from "react"
import { useGlobalState } from '../hooks/globalState'
import {detectProvider, getWalletAddress , getWalletStats,getCoinPrice, formatCurrency} from '../hooks/globalFun'
import { useChangeLanguage } from "../hooks/useCustomHooks"

export default function Cards({ accountAddress,setAccountAddress }) {
    const [ provider ] = useState(detectProvider())
    const [ currentLanguage , t] = useChangeLanguage()
    const [defaultCurrency] = useGlobalState("defaultCurrency")

    const [ chainInfo, setChainInfo ] = useState({
        chain_name: null,
        symbol:null,
        network:null
    })
    const [ balanceInfo , setBalanceInfo ] = useState({
        currency: defaultCurrency == 'usd' ? '$' : 'MMK',
        nativeBalance: null,
        priceChangePercentage: "0.00"
    })
    
    const [ isLoading , setIsLoading ] = useState({
        chainInfo : true,
        balanceInfo : true
    })
    const fetchAddress = async () => {
        const wallet_address = await getWalletAddress(provider)
        setAccountAddress(wallet_address)    
    }

    const fetchBalances = async () => {
        setIsLoading({
            chainInfo : true,
            balanceInfo : true
        })
        const [chainInfo, nativeBalance] = await getWalletStats(provider,accountAddress)
        setChainInfo({
            chain_name:chainInfo[0].name,
            symbol:chainInfo[0].nativeCurrency.symbol,
            network: chainInfo[0].network
        })
        setIsLoading({
            chainInfo : false
        })
        const coinInfo = await getCoinPrice(defaultCurrency,chainInfo[0].nativeCurrency.symbol)
        setBalanceInfo({
           currency: coinInfo.length > 0 ? (defaultCurrency == 'usd' ? '$' : 'MMK' ) : chainInfo[0].nativeCurrency.symbol,
           nativeBalance : coinInfo.length > 0 ? (nativeBalance*coinInfo[0].current_price).toFixed(2) : nativeBalance.toFixed(2),
           priceChangePercentage: coinInfo.length > 0 ? coinInfo[0].price_change_percentage_24h.toFixed(2) : "0.00",
           isLoading: false
        })
        setIsLoading({
            balanceInfo : false
        })
    }
    useEffect(()=>{
        fetchBalances()
     },[defaultCurrency])

    useEffect(()=>{
        if(accountAddress && provider) {
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
        <div className="my-6 flex flex-col sm:flex-row items-start gap-10">
            <div className="card w-full sm:w-auto bg-base-100 shadow-md">
                <div className="card-body">
                    <h2 className="card-title font-medium mb-1">
                        Current Network
                    </h2>
                    <div className="flex flex-row items-center gap-2 mt-1">
                        {
                            isLoading.chainInfo ?
                                <div className="flex">
                                    <svg className="motion-reduce:hidden animate-spin -ml-1 mr-2 h-5 w-5 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <p className="text-sm font-semibold text-center select-none leading-5"> 
                                        Detecting...
                                    </p>
                                </div>
                                :
                                <>
                                    <span className="text-base">{chainInfo.chain_name ?? 'Unknown'}</span> 
                                    <div className="badge badge-outline ">{chainInfo.symbol ?? '-'}</div>  
                                    {chainInfo.network ? <div className="badge badge-outline capitalize">{chainInfo.network}</div> : ''}
                                </>
                        }
                    </div>
                </div>
            </div>
            <div className="card w-full sm:w-auto bg-base-100 shadow-md overflow-visible">
                <div className="card-body">
                    <h2 className="card-title font-medium">
                        Total Balance <div className="tooltip tooltip-top tooltip-gray-400" data-tip="Native Balance"><div className="mt-1 btn btn-ghost text-info btn-xs btn-circle"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline h-5 w-6 stroke-gray-500 dark:stroke-gray-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div></div>
                    </h2>
                    <div className="flex flex-row items-center gap-2 mt-1 text-lg"> 
                    {/* sm:text-md md:text-xl */}
                    {
                            isLoading.chainInfo ?
                            <div className="flex">
                            <svg className="motion-reduce:hidden animate-spin -ml-1 mr-2 h-5 w-5 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <p className="text-sm font-semibold text-center select-none leading-5"> 
                                Detecting...
                            </p>
                        </div>: 
                        <>
                            <span className="text-[#139287]">{formatCurrency(balanceInfo.nativeBalance ?? '0.00')} {balanceInfo.currency}</span>
                        <div className="flex flex-row items-center gap-1">
                            {balanceInfo.priceChangePercentage[0] == '-' ? <AiFillCaretDown className="mt-0.5 text-red-500"/>:<AiFillCaretUp className="mt-0.5 text-[#139287]"/>}
                            <span className={ balanceInfo.priceChangePercentage[0] == '-'? 'text-red-500' : 'text-[#139287]' }>{balanceInfo.nativeBalance > 0 ? balanceInfo.priceChangePercentage.replace(/\s|-/g,'') : "0.00" } %</span>
                            <div className="badge badge-outline">24 H</div> 
                        </div>
                        </> 
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}