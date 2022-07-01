import { useEffect, useState } from 'react'

export default function Pagination({ currentPage,paginate,pageNumbers }){
    
    const [arrOfCurrButtons,setArrOfCurrButtons] = useState([])
    
    useEffect( () => {
        let tempNumberOfPages = [...pageNumbers]
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
        setArrOfCurrButtons(tempNumberOfPages)
    },[currentPage] )

    return(
        <div className="tabs tabs-boxed bg-white dark:bg-gray-900 shadow-md select-none dark:text-accent-content">
            { arrOfCurrButtons.map( (page,index) => {
                return (
                    page === '...' ?
                        <button className="font-semibold rounded-md mx-1 mb-1" key={index}>{page}</button>
                        :<button 
                            className={`tab font-semibold rounded-md mx-1 ${currentPage === page ? 'bg-teal-500 shadow-2xl text-accent-content border border-transparent' : 'btn-ghost' }`} 
                            style={ { transition: "all 0.2s ease" }}
                            onClick={ () => paginate(page) }
                            key={index}
                        >{page}</button> 
                )
            } )}
        </div>
    )
}
