import { AiFillCaretUp,AiFillCaretDown } from "react-icons/ai"
import { useGlobalState } from '../hooks/globalState'
import {useEffect,useState} from "react"
import { getChainStats,getBalanceStats,getCoinChangePrice, formatBalanceCommas} from '../hooks/globalFun'

export default function BalanceInfoCard({provider , accountAddress , translation }) {

    const [defaultCurrency] = useGlobalState("defaultCurrency")
    const [ isLoading, setIsLoading ] = useState(true)

    const [ balanceInfo , setBalanceInfo ] = useState({
        currency: null,
        nativeBalance: null,
        priceChangePercentage: null
    })

    
    const fetchBalances = async () =>{
        setIsLoading(true)
        //get Native Currency Symbol
        const chainInfo = await getChainStats(provider)
        const currencySymbol = chainInfo[0].nativeCurrency.symbol
        const nativeBalance = await getBalanceStats(provider,accountAddress)
        const coinInfo = await getCoinChangePrice(defaultCurrency,currencySymbol)

        if (coinInfo.length > 0) {
            setBalanceInfo({
                currency: defaultCurrency.toLocaleUpperCase(),
                nativeBalance :  nativeBalance*coinInfo[0].current_price,
                priceChangePercentage: coinInfo[0].price_change_percentage_24h.toFixed(2)
            })
        }else{
            setBalanceInfo({
                currency: currencySymbol,
                nativeBalance :nativeBalance,
                priceChangePercentage: "0.00"
            })
        }
        setIsLoading(false)
    } 
   
    useEffect(()=>{
        fetchBalances()
    },[defaultCurrency,accountAddress])


    useEffect(()=>{
        if(provider) {
            provider.on("chainChanged" , fetchBalances )
        }
        return () => {
            if(provider) {
                provider.removeAllListeners('chainChanged')
            }
        }
    },[])

    return ( 
        <div className="card-body">
            <h2 className="card-title font-medium">
                {translation('net_worth')} <div className="tooltip tooltip-top tooltip-gray-400" data-tip={translation('total_balance_in')+' '+ defaultCurrency.toLocaleUpperCase()}><div className="mt-1 btn btn-ghost text-info btn-xs btn-circle"><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline h-5 w-6 stroke-gray-500 dark:stroke-gray-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div></div>
            </h2>
            <div className="flex flex-col xs:flex-row gap-2 mt-1 text-lg"> 
            {
                isLoading ?
                <div className="flex flex-row">
                    <svg className="motion-reduce:hidden animate-spin -ml-1 mr-2 h-5 w-5 text-teal-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="text-sm font-semibold text-start select-none leading-5"> 
                        {translation('detecting')} 
                    </p>
                </div>: 
                <>
                    <span className="text-[#139287]">{formatBalanceCommas(balanceInfo['nativeBalance'].toFixed(2))} {balanceInfo.currency}</span>
                    <div className="flex flex-row gap-1 items-center">
                        {balanceInfo.priceChangePercentage[0] == '-' ? <AiFillCaretDown className="mt-0.5 text-red-500"/>:<AiFillCaretUp className="mt-0.5 text-[#139287]"/>}
                        <span className={ balanceInfo.priceChangePercentage[0] == '-'? 'text-red-500' : 'text-[#139287]' }>{balanceInfo.nativeBalance > 0 ? balanceInfo.priceChangePercentage.replace(/\s|-/g,'') : "0.00" } %</span>
                        <div className="ml-2 xs:ml-1 badge badge-outline">24 H</div> 
                    </div>
                </> 
            }
            </div>
        </div>
    )
}