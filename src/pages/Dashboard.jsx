import { Link } from "react-router-dom"
import { AiFillCaretUp } from "react-icons/ai"
import NotFound from "./NotFound"
import DashboardNav from "../components/DashboardNav"
import { useEffect,useState } from "react"
import useLocalStorage from '../hooks/useLocalStorage'
import {detectProvider, getWalletAddress } from '../hooks/globalFun'

export default function Dashboard() {

    const [ provider ] = useState(detectProvider())
    const [ accountAddress, setAccountAddress ] = useLocalStorage('account_address', '')
    
    if (!accountAddress)
        return <NotFound/>
    
    const fetchAddress = async () => {
        const wallet_address = await getWalletAddress(provider)
        setAccountAddress(wallet_address)    
    }
    
    useEffect(()=>{
        if(accountAddress && provider) provider.on("accountsChanged" ,fetchAddress)
        return () => {
            if(accountAddress && provider) provider.removeAllListeners('accountsChanged')
        }
    },[accountAddress])

    return (
        <main>
            <DashboardNav accountAddress={accountAddress}/>
            <div className="bg-gray-100 dark:bg-gray-800 h-screen duration-100">
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
                        <div className="card w-auto sm:w-58 bg-base-100 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title font-medium mb-0.4">
                                    Total Balance
                                </h2>
                                <div className="flex flex-row items-center gap-2 text-xl">
                                    <span className="text-[#139287]">$ 0</span>
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
                    <div className="my-6">
                        <div className="overflow-x-auto rounded-lg shadow-md">
                            <table className="table w-full">
                                <tr className="bg-teal-500 text-accent-content select-none text-center">
                                    <th className="hidden sm:table-cell">#</th>
                                    <th className="text-left">Name</th>
                                    <th className="text-left">Amount</th>
                                    <th className="text-left">Price</th>
                                    <th className="text-left">24H P/L</th>
                                </tr>
                                <tbody className="lg:text-lg font-normal text-gray-900 dark:text-accent-content">
                                <tr>
                                    <td className="text-center hidden sm:table-cell dark:border-y-0">1</td>
                                    <td className="dark:border-y-0">BNB</td>
                                    <td className="dark:border-y-0">0</td>
                                    <td className="dark:border-y-0">Blue</td>
                                    <td className="dark:border-y-0">Blue</td>
                                </tr>
                                <tr>
                                    <td className="text-center hidden sm:table-cell dark:border-y-0">2</td>
                                    <td className="dark:border-y-0">BNB</td>
                                    <td className="dark:border-y-0">0</td>
                                    <td className="dark:border-y-0">Blue</td>
                                    <td className="dark:border-y-0">Blue</td>
                                </tr>
                                <tr>
                                    <td className="text-center hidden sm:table-cell dark:border-y-0">3</td>
                                    <td className="dark:border-y-0">BNB</td>
                                    <td className="dark:border-y-0">0</td>
                                    <td className="dark:border-y-0">Blue</td>
                                    <td className="dark:border-y-0">Blue</td>
                                </tr>
                                <tr>
                                    
                                    <td className="text-center hidden sm:table-cell dark:border-y-0">4</td>
                                    <td className="dark:border-y-0">BNB</td>
                                    <td className="dark:border-y-0">0</td>
                                    <td className="dark:border-y-0">Blue</td>
                                    <td className="dark:border-y-0">Blue</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}