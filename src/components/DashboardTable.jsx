import { useEffect,useState } from "react"
import Pagination from "./layout/Pagination"
import Row from "./layout/Row"
import { fetcher, getChainStats,paginate } from '../hooks/globalFun'
import { useQuery } from 'react-query'
import SkeletonLoader from "../components/layout/SkeletonLoader"

export default function DashboardTable({ accountAddress,provider, searchValue, translation}){
  
    const [currentPage, setCurrentPage] = useState(1)
    const [searchItems, setSearchItems] = useState([])
    const [chainId, setChainId ] = useState()
    const fetchChainId = async () => {
        const chainInfo = await getChainStats(provider)
        setChainId(chainInfo[0].chainId)
    }
    useEffect(()=>{
        fetchChainId()
        if(provider) {
            provider.on("chainChanged" , fetchChainId )
        }
        return () => {
            if(provider) {
                provider.removeAllListeners('chainChanged')
            }
        }
    },[])
    
    const { error, isLoading, data } = useQuery(chainId && ['walletData',chainId],()=>fetcher(`https://api.covalenthq.com/v1/${chainId}/address/${accountAddress}/balances_v2/?quote-currency=USD&format=JSON&nft=false&no-nft-fetch=true&key=ckey_9a3d9397e3bb45d395427d81c37`))
    const showItems = data == null ? [] : data['items'].filter(item => parseFloat(item.balance) > 0 && item.contract_name !== null && item.type !== 'dust')

    useEffect(()=>{   
        setSearchItems(showItems.filter(item=> item.contract_name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1))
        setCurrentPage(1)
    },[searchValue])

    let tempNumberOfPages , items

    [tempNumberOfPages,items] = paginate(searchItems,showItems,currentPage,items, tempNumberOfPages)
    
    //Change Page
    const changePage = (pageNumber) => setCurrentPage(pageNumber)
    return(
        <>
            <div  className="overflow-x-auto rounded-lg shadow-md">
                <div className="table w-full">
                    <tr className="bg-teal-500 text-accent-content select-none text-center">
                        <th className="hidden sm:table-cell w-1/12">#</th>
                        <th className="text-left w-2/4 sm:w-2/6">{translation('name')}</th>
                        <th className="hidden xs:table-cell w-1/4 sm:w-1/6">{translation('price')}</th>
                        <th className="text-right xl:text-center w-1/4 sm:w-1/6">{translation('available_amount')}</th>
                        <th className="hidden md:table-cell w-1/6">{translation('change_24_hr')}</th>
                        <th className="hidden lg:table-cell w-1/6">{translation('last_24_hr')}</th>
                    </tr>
                    <tbody className="w-full lg:text-lg font-normal text-gray-900 dark:text-accent-content shadow-md">
                       {isLoading || error ? <SkeletonLoader /> : <Row data={items}/>} 
                    </tbody>
                </div>
            </div>
       
            <div className="flex flex-col items-center px-4 mx-auto mt-8 dark:mt-10">
                { items.length > 0 &&  
                    <Pagination 
                        currentPage = {currentPage} 
                        paginate = {changePage}
                        pageNumbers = {tempNumberOfPages}
                    />
                }          
            </div>
        </>
    )
}