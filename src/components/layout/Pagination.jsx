export default function Pagination({ currentPage,paginate,pageNumbers }){
    
    return(
        <div className="tabs tabs-boxed bg-white dark:bg-gray-900 shadow-md select-none dark:text-accent-content">
            { pageNumbers.map( (page,index) => {
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
