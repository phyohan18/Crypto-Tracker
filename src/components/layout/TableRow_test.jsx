import React,{ Suspense , lazy } from 'react'
import { formatBalanceCommas } from '../../hooks/globalFun'
const Sparkline = lazy(() => import('./Sparkline'))
export function TableRow({coinInfo, currency}) {
    return (
        <tr className="text-center">
            <td className="hidden sm:table-cell dark:border-y-0">{coinInfo.market_cap_rank}</td>
            <td className="dark:border-y-0"> 
                <div className="flex items-center">
                    <img className="w-8 h-8 lg:w-9 lg:h-9 rounded-full" src={coinInfo.image.replace('large','small')} alt={coinInfo.name} />
                    <div className="md:flex">
                        <div className="pl-4 font-medium capitalize">{coinInfo.name}</div>
                        <div className="pl-4 uppercase flex">{coinInfo.symbol}</div>
                    </div>
                </div>
            </td>
            {/* <td className="text-right xl:text-center dark:border-y-0">
                <div className="md:flex">
                    <div className="w-full font-medium md:font-normal"><span className="uppercase">{currency}&nbsp;</span>{formatBalanceCommas(coinInfo.current_price)}</div>
                    <div className={`block font-semibold md:font-light md:hidden ${coinInfo.price_change_percentage_24h > 0 ? 'text-emerald-600' : 'text-red-500'}`}>{coinInfo.price_change_percentage_24h}%</div>
                </div>
            </td> */}
            <td className="text-right xl:text-center dark:border-y-0">
                <div className="md:flex">
                    <div className="w-full font-medium md:font-normal"><span className="uppercase">{currency}&nbsp;</span>{coinInfo.current_price}</div>
                    <div className={`block font-semibold md:font-light md:hidden ${coinInfo.price_change_percentage_24h > 0 ? 'text-emerald-600' : 'text-red-500'}`}>{coinInfo.price_change_percentage_24h}%</div>
                </div>
            </td>
            <td className="hidden md:table-cell dark:border-y-0"><div className={`font-semibold ${coinInfo.price_change_percentage_24h > 0 ? 'text-emerald-600' : 'text-red-600'}`}>{coinInfo.price_change_percentage_24h}%</div></td>
            {/* <td className="hidden xs:table-cell dark:border-y-0 "><span className="uppercase">{currency}&nbsp;</span>&nbsp;{formatBalanceCommas(coinInfo.market_cap)}</td> */}
            <td className="hidden xs:table-cell dark:border-y-0 "><span className="uppercase">{currency}&nbsp;</span>&nbsp;{coinInfo.market_cap}</td>
            <td className="hidden lg:flex items-center justify-center dark:border-y-0">
                <div className="w-40 h-12">
                    <Suspense fallback={<div className="bg-slate-200 dark:bg-slate-600 rounded mx-auto w-40 h-12"></div>}>
                        <Sparkline data={coinInfo.sparkline_in_7d.price}/>
                    </Suspense>
                </div> 
            </td>
        </tr>
    )
}

export default React.memo(TableRow)