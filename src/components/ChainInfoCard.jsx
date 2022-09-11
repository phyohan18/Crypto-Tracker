import React,{useEffect,useState } from "react"
import { getChainStats} from '../hooks/globalFun'
function ChainInfoCard({provider}) {

    const [ chainInfo, setChainInfo ] = useState({
        chain_name: null,
        symbol:null,
        network:null
    })
    const [ isLoading, setIsLoading ] = useState(true)
    const fetchChainInfo = async () => {
        setIsLoading(true)
        const chainInfo = await getChainStats(provider)
        setChainInfo({
            chain_name:chainInfo[0].name,
            symbol:chainInfo[0].nativeCurrency.symbol,
            network: chainInfo[0].network
        })
        setIsLoading(false)
    }
    useEffect(()=>{
        fetchChainInfo()
        if(provider) {
            provider.on("chainChanged" , fetchChainInfo )
        }
        return () => {
            if(provider) {
                provider.removeAllListeners('chainChanged')
            }
        }
    },[])

    return (
        <div className="card-body">
            <h2 className="card-title font-medium mb-1">
                Current Network
            </h2>
            <div className="flex flex-row items-center gap-2 mt-1">
                {
                    isLoading ?
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
    )
}


export default React.memo(ChainInfoCard)