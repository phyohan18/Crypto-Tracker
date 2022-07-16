import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import NotFound from './pages/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
)