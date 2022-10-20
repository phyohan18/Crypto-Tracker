import React, { Suspense , useState} from 'react'
// const HomeTable = React.lazy(() => import('./HomeTable'))
// const DashboardTable = React.lazy(()=> import('./DashboardTable'))
import DashboardTable from './DashboardTable'
import HomeTable from './HomeTable'
//Suspense Htae Kyi
export default function Section(props){

    const [searchValue, setSearchValue] = useState('')

    const handleSearch = (value) => {
        setSearchValue(value)
    }

    return (
        <>
            <div className={props.className} >
                <input type="text" placeholder={props.translation('search')} className="duration-75 input light:input-bordered  w-full dark:bg-[#2A3441]" onChange={(e)=> handleSearch(e.target.value)}/>
            </div>
            <div className={`my-8 ${props.accountAddress ?'' :  'container lg:w-12/14 xl:w-10/12 2xl:w-8/12 mb-8 xl:mb-0 px-4 md:px-8 mx-auto mt-4' }`}>
                {/* <Suspense fallback={<div>loading</div>}> */}
                    {
                        props.accountAddress ? 
                            <DashboardTable searchValue={searchValue} translation={props.translation} accountAddress={props.accountAddress} provider={props.provider} /> 
                            : 
                            <HomeTable  searchValue={searchValue} translation={props.translation}/>
                    }
                {/* </Suspense> */}
            </div>       
        </>
    )
}