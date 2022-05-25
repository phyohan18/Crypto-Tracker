import TableRow from './layout/TableRow'
import SkeletonWrapper from './layout/SkeletonWrapper'
import Pagination from './layout/Pagination'
import { useEffect, useState} from 'react'


export default function DataTable(){

    const [showItems,setShowItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [itemsPerPage] = useState(10)

   
    useEffect(()=>{
       const getData = async () => {
           setLoading(true)
           const res = await  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_rank_desc&per_page=100&page=1&sparkline=true')
           const data = await res.json()
           setShowItems(data.map( item => <TableRow key={item.id} coinInfo={item}/> ))
           setLoading(false)
       }  
       getData();
    }, [])

    // Get current items
    const index0fLastItem=currentPage*itemsPerPage
    const index0fFirstItem=index0fLastItem-itemsPerPage
    const currentItems=showItems.slice(index0fFirstItem, index0fLastItem)
    

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    const  pages = Math.ceil(showItems.length/itemsPerPage)
    return (
        <section className="py-1 bg-gray-100">
            <div className="container lg:w-12/14 xl:w-9/12 2xl:w-8/12 mb-8 xl:mb-0 px-4 mx-auto mt-8" >
                <input type="text" placeholder="Type here" className="input input-bordered  w-full "/>
            </div>
            
            <div className="container lg:w-12/14 xl:w-10/12 2xl:w-8/12 mb-8 xl:mb-0 px-4 mx-auto mt-4">
                <div className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-md rounded-lg">
                    <div className="overflow-x-auto rounded-lg">
                    <table className="table w-full">
                        <tr className="bg-teal-500 text-accent-content select-none text-center">
                        <th className="hidden sm:table-cell">#</th>
                        <th className="text-left">Name</th>
                        <th className="text-right">Price</th>
                        <th className="text-right hidden md:table-cell">Change(24h)</th>
                        <th className="sm:text-right">Market Cap</th>
                        <th className="hidden lg:table-cell">Last 7 Days</th>
                        </tr>
                        <tbody className="lg:text-lg font-normal text-gray-900 dark:text-accent-content">
                            { loading ? <SkeletonWrapper amount={itemsPerPage}/> : currentItems }
                        </tbody>   
                        </table> 
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center mb-8 px-4 mx-auto mt-8">
            { loading == false &&  
                <Pagination 
                    currentPage={currentPage} 
                    paginate={paginate}
                    pages = {pages}
                />
            }
            </div>
        </section>
    )
}