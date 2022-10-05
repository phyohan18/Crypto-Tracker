import image from '../../images/empty-token.png'
import { formatBalanceDecimals,getPercentageChange} from '../../hooks/globalFun'
import { useGlobalState } from "../../hooks/globalState"
export default function Row({data}){

    const [defaultCurrency] = useGlobalState("defaultCurrency")
    const displayPercentageChange = (quote_rate_24h,quote_rate) =>{
        if (quote_rate_24h == null)  return '--'
        const value = parseFloat(getPercentageChange(quote_rate_24h,quote_rate))
        return  <div className={`font-semibold ${value > 0 ? 'text-emerald-600' : 'text-red-500'}`}>{value}%</div>
    }
    const renderTableRow = (items) =>{
       if (items.length > 0 ) {
             return items.map( (item,index) => 
             <tr className="text-center" key={index}>
             <td className="hidden sm:table-cell dark:border-y-0">{index+1}</td>
             <td className="dark:border-y-0"> 
                 <div className="flex items-center">
                     <img className="w-8 h-8 lg:w-9 lg:h-9 rounded-full" onError={(e)=>e.target.src = image} src={item.logo_url} alt={item.contract_name} />
                     <div className="md:flex">
                         <div className="pl-4 font-medium capitalize">{item.contract_name}</div>
                         <div className="pl-4 uppercase flex">{item.contract_ticker_symbol}</div>
                     </div>
                 </div>
             </td>
             <td className="hidden xs:table-cell dark:border-y-0">
                 {
                     item.quote_rate == null ?
                     '-'
                     :
                     <>
                         <span className="uppercase">&nbsp;{defaultCurrency}</span>&nbsp;{item.quote_rate}
                     </>
                 }
                 
                 {/* <div className={`font-semibold ${coinInfo.price_change_percentage_24h > 0 ? 'text-emerald-600' : 'text-red-600'}`}>{coinInfo.price_change_percentage_24h}%</div> */}
             </td>
             <td className="text-right xl:text-center dark:border-y-0">
                 <div className="md:flex">
                     <div className="w-full font-medium md:font-normal">{formatBalanceDecimals(item.contract_decimals,item.balance)}</div>
                     {/* <div className={`block font-semibold md:font-light md:hidden ${coinInfo.price_change_percentage_24h > 0 ? 'text-emerald-600' : 'text-red-500'}`}>{coinInfo.price_change_percentage_24h}%</div> */}
                 </div>
             </td>
             <td className="hidden md:table-cell dark:border-y-0 ">
                 {displayPercentageChange(item.quote_rate_24h,item.quote_rate)}
             </td>
             <td className="hidden lg:flex items-center justify-center dark:border-y-0">
                 <div className="w-40 h-12">
                     {
                         // 
                     }
                     {/* <Suspense fallback={<div className="bg-slate-200 dark:bg-slate-600 rounded mx-auto w-40 h-12"></div>}>
                         <Sparkline data={coinInfo.sparkline_in_7d.price}/>
                     </Suspense> */}
                 </div> 
             </td>
             </tr>)
        } else
        {
            return <tr className='text-center'>No asset</tr>
        } 
    }
     
     return (
         <>{renderTableRow(data)}</>
    )
}