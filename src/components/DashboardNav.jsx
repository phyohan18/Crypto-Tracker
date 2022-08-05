import { formatAddress ,disconnect} from '../hooks/globalFun'
import { BsSun,BsMoon } from 'react-icons/bs'
import {RiArrowDropDownLine} from 'react-icons/ri'
import { Link } from "react-router-dom"
import useDarkMode from '../hooks/useDarkMode'

export default function DashboardNav({accountAddress}){
    
    const [darkMode,toggleDarkMode] = useDarkMode()

    return (
        <header className="z-30 navbar fixed bg-base-100 shadow duration-100">
            <div className="container mx-auto px-6">
                <div className="flex-1">
                    <Link className="font-extrabold text-xl dark:text-accent-content" to="/" >
                        <span className="text-teal-500">Crypto </span> Tracker
                    </Link>
                </div>
                <div className="flex flex-row">
                    <div title="Change Currency" className="dropdown dropdown-end hidden sm:block mt-0.5">
                        <label tabIndex="0" className="btn gap-2 btn-ghost dark:text-white">
                            <img className="w-6 h-6" src={"https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg"} alt="usd"/>
                            <span className='text-lg upper-case hidden md:block'>usd</span> 
                            <RiArrowDropDownLine size={27} />       
                        </label>
                        <div className="dropdown-content bg-base-100 rounded-t-box rounded-b-box top-px h-auto w-52 overflow-y-auto shadow-lg mt-16">
                            <ul className="menu menu-compact p-3 gap-y-1.5" tabIndex="0">
                                <li><button className='active text-white'>USD</button></li>
                                <li ><button>MMK</button></li>                            
                            </ul>
                        </div>
                    </div>
                    <div title="Change Language" className="dropdown dropdown-end hidden sm:block mt-0.5">
                        <label tabIndex="0" className="btn gap-2 btn-ghost dark:text-white">
                            <img className="w-6 h-6 rounded-lg" src={"https://flagicons.lipis.dev/flags/4x3/mm.svg"} alt="mm"/>
                            <span className={`text-lg hidden uppercase md:block`}>mm</span> 
                            <RiArrowDropDownLine size={27}/>
                        </label> 
                        <div className="dropdown-content bg-base-100 rounded-t-box rounded-b-box top-px h-auto w-52 overflow-y-auto shadow-lg mt-16">
                            <ul className="menu menu-compact p-3  gap-y-1.5" tabIndex="0">
                                <li><button className='active text-white'><img className="w-6 h-6 rounded-lg" src={"https://flagicons.lipis.dev/flags/4x3/gb.svg"} alt="en"/>English</button></li>                              
                                <li ><button><img className="w-6 h-6 rounded-lg" src={"https://flagicons.lipis.dev/flags/4x3/mm.svg"} alt="mm"/>Myanmar</button></li>
                            </ul>
                        </div>
                    </div>
                    <div  title="Wallet Address" className="dropdown dropdown-end hidden sm:block">
                        <label tabIndex="0" className="flex gap-1 rounded-xl p-2 items-center hover:bg-base-200 dark:hover:bg-gray-800 transition duration-200 ease-in-out cursor-pointer w-full">
                            <div className="p-1.5"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 212 189"><g fill="none" filrule="evenodd"><polygon fill="#CDBDB2" points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"/><polygon fill="#CDBDB2" points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875" transform="matrix(-1 0 0 1 256.5 0)"/><polygon fill="#393939" points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"/><polygon fill="#F89C35" points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"/><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"/><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"/><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"/><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"/><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90.563 152.438"/><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"/><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"/><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"/><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"/><polygon fill="#DFCEC3" points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"/><polygon fill="#DFCEC3" points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625" transform="matrix(-1 0 0 1 272.25 0)"/><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"/><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"/><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"/><g transform="matrix(-1 0 0 1 211.5 0)"><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"/><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"/><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"/><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"/><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90 153"/><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"/><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"/><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"/><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"/><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"/><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"/><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"/></g></g></svg>
                            </div>
                            <p className="text-md font-semibold text-center select-none leading-5 dark:text-white pr-1.5"> 
                                { accountAddress && formatAddress(accountAddress)}
                            </p>
                        </label>
                        <ul tabIndex="0" className="mt-3 p-2 menu menu-compact dropdown-content bg-base-100 rounded-box w-52  shadow-lg">
                            <li onClick={()=>disconnect()}><Link to='/'>Disconnect</Link></li>
                        </ul>
                    </div>
                    <div className="tooltip tooltip-bottom tooltip-gray-400 hidden sm:block" data-tip="Toggle dark mode">
                            <label tabIndex="0" className={`swap swap-rotate btn btn-ghost mt-0.5 dark:text-white`} onChange={()=>toggleDarkMode()}>
                                <input type="checkbox"  checked={darkMode ? 'checked' : ''} readOnly/>
                                <BsMoon className='swap-on w-5 h-5 stroke-[0.5px]' />
                                <BsSun className='swap-off w-5 h-5 stroke-[0.5px]' />
                            </label>
                    </div>
                    <div className="dropdown dropdown-end sm:hidden">
                        <label tabIndex="0" className="flex gap-2 rounded-xl p-2 items-center hover:bg-base-200 dark:hover:bg-gray-800 transition duration-200 ease-in-out cursor-pointer w-full">
                            <div className="p-1.5"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 212 189"><g fill="none" filrule="evenodd"><polygon fill="#CDBDB2" points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"/><polygon fill="#CDBDB2" points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875" transform="matrix(-1 0 0 1 256.5 0)"/><polygon fill="#393939" points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"/><polygon fill="#F89C35" points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"/><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"/><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"/><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"/><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"/><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90.563 152.438"/><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"/><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"/><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"/><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"/><polygon fill="#DFCEC3" points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"/><polygon fill="#DFCEC3" points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625" transform="matrix(-1 0 0 1 272.25 0)"/><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"/><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"/><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"/><g transform="matrix(-1 0 0 1 211.5 0)"><polygon fill="#F89D35" points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"/><polygon fill="#D87C30" points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"/><polygon fill="#EA8D3A" points="46.125 101.813 65.25 119.813 65.25 137.813"/><polygon fill="#F89D35" points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"/><polygon fill="#EB8F35" points="65.25 138.375 60.75 173.25 90 153"/><polygon fill="#EA8E3A" points="92.25 102.375 95.063 150.188 86.625 125.719"/><polygon fill="#D87C30" points="39.375 138.938 65.25 138.375 60.75 173.25"/><polygon fill="#EB8F35" points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"/><polygon fill="#E8821E" points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"/><polygon fill="#393939" points="70.313 112.5 64.125 125.438 86.063 119.813" transform="matrix(-1 0 0 1 150.188 0)"/><polygon fill="#E88F35" points="12.375 .563 88.875 58.5 75.938 27"/><path fill="#8E5A30" d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"/></g></g></svg>
                            </div>
                            <p className="text-md font-semibold text-center select-none leading-5 pr-1.5 dark:text-white"> 
                                { accountAddress && formatAddress(accountAddress)}
                            </p>
                        </label>
                        <ul tabIndex="0" className="mt-3 p-2 shadow-lg menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <select value="USD" className="select w-full max-w-xs mb-2.5  bg-base-100 text-base-content" >
                                    <option value="usd">USD</option>
                                    <option value="mmk">MMK</option>
                                </select>
                            </li>
                            <li>
                                <select value="EN" className="select w-full max-w-xs mb-2.5  bg-base-100 text-base-content">
                                    <option value="en">Lang: EN</option>
                                    <option value="mm">Lang: MM</option>
                                </select>
                            </li>
                            <li>
                                <label tabIndex="0" className="swap swap-rotate place-content-start py-4 mb-1" onChange={()=>toggleDarkMode()}>
                                    <input type="checkbox"  checked={darkMode ? 'checked' : ''} readOnly/>
                                    <a className="swap-on inline-flex">
                                        <span className="mr-1 font-semibold">Dark</span>
                                        <BsMoon className='w-4 h-3 mt-1' />
                                    </a>                           
                                    <a className="swap-off inline-flex">
                                        <span className="mr-1 font-semibold">Light</span>
                                        <BsSun className='w-4 h-4 mt-0.5' />
                                    </a>
                                </label>
                            </li>
                            <li  onClick={()=>disconnect()}>
                                <Link to="/" className='py-4  font-semibold'>
                                    Disconnect
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}