import { Sparklines, SparklinesLine } from 'react-sparklines';
export default function TableRow({coinInfo, currency}) {

    const formatCurrency = (x) =>  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

    const divStyle ={
        width:"162px",
        height: "48px"
    };

    return (
        <tr>
            <td className="text-center hidden sm:table-cell dark:border-y-0">{coinInfo.market_cap_rank}</td>
            <td className="dark:border-y-0"> 
                <div className="flex items-center">
                    <img className="w-8 h-8 lg:w-9 lg:h-9 rounded-full" src={coinInfo.image} alt={coinInfo.name} />
                    <div className="md:flex">
                        <div className="pl-4  font-medium capitalize">{coinInfo.name}</div>
                        <div className="pl-4 uppercase">{coinInfo.symbol}</div>
                    </div>
                </div>
            </td>
            <td className="text-right dark:border-y-0">
                <div className="md:flex">
                    <div className="w-full font-medium md:font-normal"><span className="uppercase">{currency}&nbsp;</span>{formatCurrency(coinInfo.current_price)}</div>
                    <div className={`block font-semibold md:font-light md:hidden ${coinInfo.price_change_percentage_24h > 0 ? 'text-emerald-600' : 'text-red-600'}`}>{coinInfo.price_change_percentage_24h}%</div>
                </div>
            </td>
            <td className="text-right hidden md:table-cell dark:border-y-0"><div className={`font-semibold ${coinInfo.price_change_percentage_24h > 0 ? 'text-emerald-600' : 'text-red-600'}`}>{coinInfo.price_change_percentage_24h}%</div></td>
            <td className="text-right dark:border-y-0"><span className="uppercase">{currency}&nbsp;</span>&nbsp;{formatCurrency(coinInfo.market_cap)}</td>
            <td className="hidden lg:flex items-center justify-center dark:border-y-0">
                <div style={divStyle}>
                    <Sparklines data={coinInfo.sparkline_in_7d.price} limit={168} width={162} height={50} margin={3}>
                        <SparklinesLine color="#14B8A6" />
                    </Sparklines>
                </div> 
            </td>
        </tr>
    )
}