import TableRow from './layout/TableRow'
import SkeletonWrapper from './layout/SkeletonWrapper'
import Pagination from './layout/Pagination'
import { useEffect, useState , useRef} from 'react'

export default function DataTable({ currency }){

    const [showItems,setShowItems] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)
    const [searchValue, setSearchValue] = useState('');
   
    useEffect(()=>{
       const getData = async () => {
           const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_rank_desc&per_page=100&page=1&sparkline=true`
           const res = await  fetch(API)
           const data = await res.json()
           setShowItems(data)
       }  
       getData();
    },[currency])


    // Get current items
    const index0fLastItem = currentPage*itemsPerPage
    const index0fFirstItem = index0fLastItem-itemsPerPage
    

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const  pages = Math.ceil(showItems.length/itemsPerPage)
    const pageNumbersArr = []
    for (let i = 1; i <= pages; i++){
        pageNumbersArr.push(i);
    }

    const renderCount = useRef(1)
    useEffect(()=>{
        renderCount.current = renderCount.current + 1
    })

    //Search Coin 
    const handleSearch = (Items) => {
        if (searchValue.length > 0) {
            return Items.filter(item=> item.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1)
        }
        return Items.slice(index0fFirstItem, index0fLastItem)
    }
    return (
        <section className="py-1 duration-75  bg-gray-100 dark:bg-gray-800">
            <div className="container lg:w-12/14 xl:w-9/12 2xl:w-8/12 mb-8 xl:mb-0 px-4 mx-auto mt-8" >
                <input type="text" placeholder="What are you looking for?" className="duration-75 input light:input-bordered  w-full dark:bg-[#2A3441]" onChange={(e)=> setSearchValue(e.target.value)}/>
            </div>
            <div>I renderd {renderCount.current}</div>
            <div className="container lg:w-12/14 xl:w-10/12 2xl:w-8/12 mb-8 xl:mb-0 px-4 mx-auto mt-4 ">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6  shadow-md rounded-lg">
                    <div className="overflow-x-auto rounded-lg">
                        <table className="table w-full ">
                            <tr className="bg-teal-500 text-accent-content select-none text-center">
                                <th className="hidden sm:table-cell">#</th>
                                <th className="text-left">Name</th>
                                <th className="text-right">Price</th>
                                <th className="text-right hidden md:table-cell">Change(24h)</th>
                                <th className="sm:text-right">Market Cap</th>
                                <th className="hidden lg:table-cell">Last 7 Days</th>
                            </tr>
                            
                            <tbody className="lg:text-lg font-normal text-gray-900 dark:text-accent-content">
                                { !showItems.length ? <SkeletonWrapper amount={itemsPerPage}/> : handleSearch(showItems).map( item => <TableRow key={item.id} coinInfo={item} currency={currency} /> ) }
                            </tbody>   
                        </table> 
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center mb-8 px-4 mx-auto mt-8">
            { showItems.length > 0 &&  
                <Pagination 
                    currentPage = {currentPage} 
                    paginate = {paginate}
                    pageNumbers = {pageNumbersArr}
                />
            }
            </div>
        </section>
    )
}