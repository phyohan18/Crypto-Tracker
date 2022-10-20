import TableRow from './layout/TableRow'
import Pagination from './layout/Pagination'
import { useEffect, useState } from 'react'
import { useGlobalState } from '../hooks/globalState'
import { fetcher,paginate} from '../hooks/globalFun'
import SkeletonLoader from "./layout/SkeletonLoader"

export default function DataTable({ searchValue, translation }){

    const [currentPage, setCurrentPage] = useState(1)
    const [searchItems, setSearchItems] = useState([])
    const [defaultCurrency] = useGlobalState("defaultCurrency")

    const [data, setData] = useState(null)
    useEffect(()=>{
        const fetch = async()=>{
            const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${defaultCurrency}&order=market_cap_rank_desc&per_page=100&page=1&sparkline=true`
            const data = await fetcher(API)
            setData(data)
        }
        fetch()
    },[defaultCurrency])
    const showItems = data == null ? [] : data
 
    useEffect(()=>{   
        setSearchItems(showItems.filter(item=> item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1))
        setCurrentPage(1)
    },[searchValue])
   
    let tempNumberOfPages , items

    [tempNumberOfPages,items] = paginate(searchItems,showItems,currentPage,items, tempNumberOfPages)
    
    //Change Page
    const changePage = (pageNumber) => setCurrentPage(pageNumber)
  
    return (
        <>
            <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="table w-full ">
                    <tr className="bg-teal-500 text-accent-content select-none text-center">
                        <th className="hidden sm:table-cell w-1/12">#</th>
                        <th className="text-left w-2/4 sm:w-2/6">{translation('name')}</th>
                        <th className="text-right xl:text-center w-1/4 sm:w-1/6">{translation('price')}</th>
                        <th className="hidden md:table-cell w-1/6">{translation('change_24_hr')}</th>
                        <th className="hidden xs:table-cell w-1/4 sm:w-1/6">{translation('market_cap')}</th>
                        <th className="hidden lg:table-cell w-1/6">{translation('last_7_days')}</th>
                    </tr>
                    <tbody className="lg:text-lg font-normal text-gray-900 dark:text-accent-content">
                        { data == null ? <SkeletonLoader />: items.map( item => <TableRow key={item.id} coinInfo={item} currency={defaultCurrency} /> ) }
                    </tbody>   
                </table> 
            </div>
            
            <div className="flex flex-col items-center mb-8 px-4 mx-auto mt-8 dark:mt-10">
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