
import {useEffect,useState } from "react"
import {detectProvider, getWalletAddress} from '../hooks/globalFun'
import BalanceInfoCard from "./BalanceInfoCard"
import ChainInfoCard from "./ChainInfoCard"
//import { useChangeLanguage } from "../hooks/useCustomHooks"

export default function Cards({accountAddress,setAccountAddress}) {
    
    //const [ currentLanguage , t] = useChangeLanguage()

    const [ provider ] = useState(detectProvider())
    const fetchAddress = async () => {
        const wallet_address = await getWalletAddress(provider)
        setAccountAddress(wallet_address)    
    }

    useEffect(()=>{
        if(accountAddress && provider) {
            provider.on("accountsChanged" ,fetchAddress)
        }
        return () => {
            if(accountAddress && provider) {
                provider.removeAllListeners('accountsChanged')
            }
        }
    },[accountAddress])
    
    return (
        <div className="my-6 flex flex-col sm:flex-row items-start gap-10">
            <div className="card w-full sm:w-auto bg-base-100 shadow-md">
               <ChainInfoCard provider={provider}/>
            </div>
            <div className="card w-full sm:w-auto bg-base-100 shadow-md overflow-visible">
               <BalanceInfoCard accountAddress={accountAddress} provider={provider}/>
            </div>
        </div>
    )
}