import { useState} from 'react'
import DataTable from './DataTable'
import { useTranslation } from 'react-i18next'

export default function Section(){

    const { t } = useTranslation();
    const [searchValue, setSearchValue] = useState('');

    const handleSearch = (value) => {
        setSearchValue(value)
    }

    return (
        <section className="py-1 duration-75  bg-gray-100 dark:bg-gray-800">
            <div className="container lg:w-12/14 xl:w-9/12 2xl:w-8/12 mb-8 xl:mb-0 px-4 mx-auto mt-8" >
                <input type="text" placeholder={t('search')} className="duration-75 input light:input-bordered  w-full dark:bg-[#2A3441]" onChange={(e)=> handleSearch(e.target.value)}/>
            </div>
            <DataTable searchValue={searchValue} /> 
        </section>
    )
}