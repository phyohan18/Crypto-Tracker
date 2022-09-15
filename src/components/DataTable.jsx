import TableRow from './layout/TableRow'
import SkeletonLoader from './layout/SkeletonLoader'
import Pagination from './layout/Pagination'
import { useEffect, useState } from 'react'
import { useGlobalState } from '../hooks/globalState'

export default function DataTable({ searchValue, translation }){
    
    const [showItems,setShowItems] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [searchItems, setSearchItems] = useState([])
    const [defaultCurrency] = useGlobalState("defaultCurrency")

    useEffect(()=>{
       const getData = async () => {
           const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${defaultCurrency}&order=market_cap_rank_desc&per_page=100&page=1&sparkline=true`
           const res = await  fetch(API)
           const data = await res.json()
           setShowItems(data)
       }  
       getData()
    },[defaultCurrency])

    useEffect(()=>{   
        setSearchItems(showItems.filter(item=> item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1))
        setCurrentPage(1)
    },[searchValue])


    let itemsPerPage = searchItems.length < 10 && searchItems.length > 0 ? searchItems.length : 10

    // Get current items
    const index0fLastItem = currentPage*itemsPerPage
    const index0fFirstItem = index0fLastItem-itemsPerPage
    
    let items, pages , tempNumberOfPages
    if (searchItems.length == 0)
    {
        items = showItems.slice(index0fFirstItem, index0fLastItem)
        pages = Math.ceil(showItems.length/itemsPerPage)
    } else {
        items = searchItems.slice(index0fFirstItem, index0fLastItem)
        pages = Math.ceil(searchItems.length/itemsPerPage)
    }
    
    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    
    const pageNumbers = []
    for (let i = 1; i <= pages; i++){
        pageNumbers.push(i)
    }

    if (currentPage >= 1 && currentPage <= 3) {
        tempNumberOfPages = [1,2,3,4,5,'...',pageNumbers.length]
    }
    else if ( currentPage >= 4 && currentPage < pageNumbers.length - 2) {
        const sliced1 = pageNumbers.slice(currentPage - 2, currentPage+1) 
        tempNumberOfPages = [1,'...',...sliced1,'...',pageNumbers.length]
    }
    else if ( currentPage > pageNumbers.length - 3) {                           
        const sliced = pageNumbers.slice(pageNumbers.length - 5)                
        tempNumberOfPages = [1,'...',...sliced]
    }

    if (searchItems.length < 50 && searchItems.length > 0){
         tempNumberOfPages = [...pageNumbers]
    }
    return (
        <>
            <div className="container lg:w-12/14 xl:w-10/12 2xl:w-8/12 mb-8 xl:mb-0 px-4 md:px-8 mx-auto mt-4 ">
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
                            { !items.length ? <SkeletonLoader/> : items.map( item => <TableRow key={item.id} coinInfo={item} currency={defaultCurrency} /> ) }
                        </tbody>   
                    </table> 
                </div>
            </div>

            <div className="flex flex-col items-center mb-8 px-4 mx-auto mt-8 dark:mt-10">
            { items.length > 0 &&  
                <Pagination 
                    currentPage = {currentPage} 
                    paginate = {paginate}
                    pageNumbers = {tempNumberOfPages}
                />
            }
            </div>
        </>
    )
}