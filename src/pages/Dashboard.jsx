import { Link } from "react-router-dom"
import { AiFillCaretUp } from "react-icons/ai"
import useLocalStorage from '../hooks/useLocalStorage'
import { formatAddress , disconnect } from '../hooks/globalFun'
import NotFound from "./NotFound"

export default function Dashboard() {

    const [ accountAddress, setAccountAddress ] = useLocalStorage('account_address', '')

    if (accountAddress == null)
        return <NotFound/>

     return (
        <main>
            <header className="navbar fixed bg-base-100 shadow">
                <div className="container mx-auto px-6">
                    <div className="flex-1">
                        <Link className="font-extrabold text-xl dark:text-accent-content" to="/" >
                            <span className="text-teal-500">Crypto </span> Tracker
                        </Link>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="dropdown dropdown-end hidden sm:block">
                            <label tabIndex="0" className="flex gap-1 rounded-xl p-2 items-center hover:bg-base-200 dark:hover:bg-gray-800 transition duration-200 ease-in-out cursor-pointer w-full">
                                <div className="p-1.5"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 212 189"><g fill="none" filrule="evenodd"><polygon fill="#CDBDB2" points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"/><polygon fill="#CDBDB2" points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875" transform="matrix(-1 0 0 1 256.5 0)"/><polygon fill="#393939" points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"/><polygon fill="#F89C35" points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"/><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"/><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"/><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"/><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"/><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90.563 152.438"/><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"/><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"/><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"/><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"/><polygon fill="#DFCEC3" points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"/><polygon fill="#DFCEC3" points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625" transform="matrix(-1 0 0 1 272.25 0)"/><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"/><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"/><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"/><g transform="matrix(-1 0 0 1 211.5 0)"><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"/><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"/><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"/><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"/><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90 153"/><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"/><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"/><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"/><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"/><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"/><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"/><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"/></g></g></svg>
                                </div>
                                <p className="text-md font-bold text-center select-none leading-5"> 
                                    { accountAddress && formatAddress(accountAddress)}
                                </p>
                            </label>
                            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                    Profile
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li onClick={()=>disconnect()}><Link to='/'>Logout</Link></li>
                            </ul>
                        </div>
                        <div className="dropdown dropdown-end sm:hidden">
                            <label tabIndex="0" className="flex gap-2 rounded-xl p-2 items-center hover:bg-base-200 dark:hover:bg-gray-800 transition duration-200 ease-in-out cursor-pointer w-full">
                                <div className="p-1.5"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 212 189"><g fill="none" filrule="evenodd"><polygon fill="#CDBDB2" points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"/><polygon fill="#CDBDB2" points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875" transform="matrix(-1 0 0 1 256.5 0)"/><polygon fill="#393939" points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"/><polygon fill="#F89C35" points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"/><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"/><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"/><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"/><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"/><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90.563 152.438"/><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"/><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"/><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"/><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"/><polygon fill="#DFCEC3" points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"/><polygon fill="#DFCEC3" points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625" transform="matrix(-1 0 0 1 272.25 0)"/><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"/><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"/><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"/><g transform="matrix(-1 0 0 1 211.5 0)"><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"/><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"/><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"/><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"/><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90 153"/><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"/><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"/><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"/><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"/><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"/><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"/><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"/></g></g></svg>
                                </div>
                                <p className="text-md font-bold text-center select-none leading-5"> 
                                     { accountAddress && formatAddress(accountAddress)}
                                </p>
                            </label>
                            <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                <a className="justify-between">
                                    Profile
                                </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg-gray-100 dark:bg-gray-800 h-screen">
                <div className="container mx-auto pt-16 px-8">
                    <div className="text-sm breadcrumbs pt-6 mb-4">
                        <ul>
                            <li>
                                <Link to="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                    Home
                                </Link>
                            </li> 
                            <li>
                                <Link to="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                                    Dashboard
                                </Link>
                            </li> 
                        </ul>
                    </div>
                    <div className="flex">
                        <span className="text-xl font-bold dark:text-accent-content">Wallet Stats</span>
                    </div>
                    <div className="my-6 flex flex-col sm:flex-row items-start gap-10">
                        <div className="card w-auto sm:w-58 bg-base-100 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title font-medium mb-0.4">
                                    Total Balance
                                </h2>
                                <div className="flex flex-row items-center gap-2 text-xl">
                                    <span className="text-[#139287]">$ 0</span>
                                    <AiFillCaretUp className="ml-1 mt-0.5 text-[#139287]"/>
                                    <span className="text-[#139287]">0.00%</span>
                                    <div className="badge badge-outline">24H</div> 
                                </div>
                            </div>
                        </div>
                        {/* {showItems && showItems.map((item)=>{
                            return (
                                <div className="card flex-row w-auto bg-base-100 shadow-md px-6 py-8 gap-2">
                                    <div className="flex flex-col gap-2">
                                        <h2 className="card-title font-medium">
                                        {item.name}
                                        <FiArrowUpRight className="text-[#139287]"/>
                                        </h2>
                                        <p className="text-xl ">$ 23.00</p>
                                    </div>
                                    <div className="w-44 h-16">
                                        <Sparkline data={item.sparkline_in_7d.price} width="230" height="90"/> 
                                    </div>
                                </div>
                            )
                        })} */}
                    </div>
                    <div className="flex">
                        <span className="text-xl font-bold dark:text-accent-content">Assets</span>
                    </div>
                    <div className="my-6">
                        <div className="overflow-x-auto rounded-lg shadow-md">
                            <table className="table w-full">
                                <tr className="bg-teal-500 text-accent-content select-none text-center">
                                    <th className="hidden sm:table-cell">#</th>
                                    <th className="text-left">Name</th>
                                    <th className="text-left">Amount</th>
                                    <th className="text-left">Price</th>
                                    <th className="text-left">24H P/L</th>
                                </tr>
                                <tbody className="lg:text-lg font-normal text-gray-900 dark:text-accent-content">
                                <tr>
                                    <td className="text-center hidden sm:table-cell dark:border-y-0">1</td>
                                    <td className="dark:border-y-0">BNB</td>
                                    <td className="dark:border-y-0">0</td>
                                    <td className="dark:border-y-0">Blue</td>
                                    <td className="dark:border-y-0">Blue</td>
                                </tr>
                                <tr>
                                    <td className="text-center hidden sm:table-cell dark:border-y-0">2</td>
                                    <td className="dark:border-y-0">BNB</td>
                                    <td className="dark:border-y-0">0</td>
                                    <td className="dark:border-y-0">Blue</td>
                                    <td className="dark:border-y-0">Blue</td>
                                </tr>
                                <tr>
                                    <td className="text-center hidden sm:table-cell dark:border-y-0">3</td>
                                    <td className="dark:border-y-0">BNB</td>
                                    <td className="dark:border-y-0">0</td>
                                    <td className="dark:border-y-0">Blue</td>
                                    <td className="dark:border-y-0">Blue</td>
                                </tr>
                                <tr>
                                    <td className="text-center hidden sm:table-cell dark:border-y-0">4</td>
                                    <td className="dark:border-y-0">BNB</td>
                                    <td className="dark:border-y-0">0</td>
                                    <td className="dark:border-y-0">Blue</td>
                                    <td className="dark:border-y-0">Blue</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}