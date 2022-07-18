import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { BsSun,BsMoon } from 'react-icons/bs'
import { FaBars } from 'react-icons/fa'
import {RiArrowDropDownLine} from 'react-icons/ri'
import i18next from 'i18next'

export default function Nav( {changeCurrency, currency , changeLang}) {

    const [showNavBar,setShowNavBar] = useState(false)
    const [darkMode,setDarkMode] = useState(true)
    const controlNavbar = ()=> window.scrollY > 25 ? setShowNavBar(true) : setShowNavBar(false)

    useEffect(()=>{
        window.addEventListener('scroll',controlNavbar)
        return ()=> window.removeEventListener('scroll',controlNavbar)
    },[])

    const toggleDarkMode = () =>{
        setDarkMode(!darkMode)
        if (darkMode) {
            document.documentElement.setAttribute('data-theme','dark')
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.setAttribute('data-theme','emerald')
            document.documentElement.classList.remove('dark')
        }
    }

    return (
        <nav className={`navbar fixed z-30 top-0 py-3 text-accent-content ease-in duration-75  ${showNavBar && 'bg-white shadow dark:bg-gray-900'}`}>
            <div className="container mx-auto px-6">
                <div className="lg:pl-3">
                    <Link className={`no-underline font-extrabold text-xl ${showNavBar && 'text-neutral dark:text-white'}`} to="/">
                        <span className="text-teal-500">Crypto </span> Tracker
                    </Link>
                </div>
                <div className="flex-grow flex items-center w-auto mt-2 lg:mt-0 z-20 ">
                    <ul className="list-reset flex justify-end flex-1 items-center">
                        <li className="ml-1 hidden sm:block">
                            <div title="Change Currency" className="dropdown dropdown-end">
                                <div tabIndex="0" className="btn gap-2 upper-case btn-ghost">
                                    <img src={"https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/USD.svg"}/>
                                    <span className={`text-lg  ${showNavBar && 'text-neutral dark:text-white'}`}>{currency}</span> 
                                    <RiArrowDropDownLine size={27} className={showNavBar ? 'text-neutral dark:text-white' : ''}/>
                                </div> 
                                <div className="dropdown-content bg-base-100 text-base-content rounded-t-box rounded-b-box top-px h-auto w-52 overflow-y-auto shadow-2xl mt-16">
                                    <ul className="menu menu-compact p-4 gap-y-1.5">
                                        <li onClick={()=>changeCurrency('usd')}><a tabIndex="0" className={currency == 'usd' ? 'active text-white' : ''}>USD</a></li>
                                        <li onClick={()=>changeCurrency('mmk')}><a tabIndex="0" className={currency == 'mmk' ? 'active text-white' : ''}>MMK</a></li>                            
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="ml-1 hidden sm:block">
                            <div title="Change Language" className="dropdown dropdown-end">
                                <div tabIndex="0" className="btn gap-2 capitalize btn-ghost">
                                    {i18next.language == 'en' ? <img className="w-6 h-6 rounded-lg" src={"https://flagicons.lipis.dev/flags/4x3/gb.svg"} alt="en"/> :
                                    <img className="w-6 h-6 rounded-lg" src={"https://flagicons.lipis.dev/flags/4x3/mm.svg"} alt="mm"/>}
                                    <span className={`text-base hidden uppercase md:block ${showNavBar && 'text-neutral dark:text-white'}`}>{i18next.language}</span> 
                                    <RiArrowDropDownLine size={27} className={showNavBar && 'text-neutral dark:text-white'}/>
                                </div> 
                                <div className="dropdown-content bg-base-100 text-base-content rounded-t-box rounded-b-box top-px h-auto w-52 overflow-y-auto shadow-2xl mt-16">
                                    <ul className="menu menu-compact p-4 uppercase gap-y-1.5">
                                        <li onClick={()=>changeLang('en')}><a tabIndex="0" className={i18next.language == 'en' ? 'active text-white' : ''}><img className="w-6 h-6 rounded-lg" src={"https://flagicons.lipis.dev/flags/4x3/gb.svg"} alt="en"/>English</a></li>                              
                                        <li onClick={()=>changeLang('mm')}><a tabIndex="0" className={i18next.language == 'mm' ? 'active text-white' : ''}><img className="w-6 h-6 rounded-lg" src={"https://flagicons.lipis.dev/flags/4x3/mm.svg"} alt="mm"/>Myanmar</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="ml-1 hidden sm:block">
                            <div className="tooltip tooltip-bottom tooltip-gray-400" data-tip="Toggle dark mode">
                                <label tabIndex="0" className={`swap swap-rotate btn btn-ghost ${showNavBar && 'text-neutral dark:text-white'}`}  onChange={()=>toggleDarkMode()}>
                                    <input type="checkbox" checked={darkMode ? '' : 'checked'} readOnly/>
                                    <BsMoon className='swap-on w-5 h-5 stroke-[0.5px]' />
                                    <BsSun className='swap-off w-5 h-5 stroke-[0.5px]' />
                                </label>
                            </div>
                        </li>
                        <li className="ml-1 sm:hidden">
                            <div className="dropdown dropdown-end">
                                <label tabIndex="0" className={`btn btn-ghost lg:hidden ${showNavBar && 'text-neutral dark:text-white'}`}>
                                    <FaBars size={20}/>
                                </label>
                                <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow  bg-base-100 text-base-content  rounded-box w-52">
                                    <li>
                                        <select value={currency} className="select w-full max-w-xs mb-2.5  bg-base-100 text-base-content" onChange={(e)=>changeCurrency(e.target.value)}>
                                            <option value="usd">USD</option>
                                            <option value="mmk">MMK</option>
                                        </select>
                                    </li>
                                    <li>
                                        <select value={i18next.language} className="select w-full max-w-xs mb-2.5  bg-base-100 text-base-content" onChange={(e)=>changeLang(e.target.value)}>
                                            <option value="en">Lang: EN</option>
                                            <option value="mm">Lang: MM</option>
                                        </select>
                                    </li>
                                    <li>
                                        <label tabIndex="0" className="swap swap-rotate place-content-start py-3" onChange={()=>toggleDarkMode()} >
                                            <input type="checkbox"  checked={darkMode ? '' : 'checked'} readOnly/>
                                            <a className="swap-on inline-flex">
                                                <span className="mr-1">Dark</span>
                                                <BsMoon className='w-4 h-3 mt-1' />
                                            </a>                           
                                            <a className="swap-off inline-flex">
                                                <span className="mr-1">Light</span>
                                                <BsSun className='w-4 h-4 mt-0.5' />
                                            </a>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}