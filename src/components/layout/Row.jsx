import image from '../../images/empty-token.png'
import { fetcher,formatBalanceCommas,formatBalanceDecimals,displayPercentageChange} from '../../hooks/globalFun'
import { useQuery } from 'react-query'
import React,{ Suspense , lazy } from 'react'
const Sparkline = lazy(() => import('./Sparkline'))

export default function Row(props){
  
    const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_rank_desc&sparkline=true&price_change_percentage=24h`
    const { error, isLoading, data } =useQuery(['sparklineData'],()=>fetcher(API))    
    const renderSparkLine = (x) =>{
        if (data) {
            const coininfo = data.filter(item=> item.symbol.toLowerCase().indexOf(x.toLowerCase()) > -1)
            return coininfo.length == 0 ?  null : coininfo[0].sparkline_in_7d.price
        }
        return null        
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
                                <span className="uppercase">&nbsp;USD</span>&nbsp;{formatBalanceCommas(item.quote_rate)}
                            </>
                        }
                    </td>
                    <td className="text-right xl:text-center dark:border-y-0">
                        <div className="md:flex">
                            <div className="w-full font-medium md:font-normal">{formatBalanceCommas(formatBalanceDecimals(item.contract_decimals,item.balance))}</div>
                        </div>
                    </td>
                    <td className="hidden md:table-cell dark:border-y-0 ">
                        {displayPercentageChange(item.quote_rate_24h,item.quote_rate)}
                    </td>
                    <td className="hidden lg:flex items-center justify-center dark:border-y-0">
                        <div className="w-40 h-12">
                                <Suspense fallback={<div className="bg-slate-200 dark:bg-slate-600 rounded mx-auto w-40 h-12"></div>}>
                                    <Sparkline data={renderSparkLine(item.contract_ticker_symbol)}/>
                                </Suspense> 
                        </div> 
                    </td>
                </tr>
            )
        } else
        {
            return (
                <tr className='text-center' >
                    <td colspan="6">No asset found !</td>
                </tr>
            )
        } 
    }
     
     return (
         <>{renderTableRow(props.data)}</>
    )
}