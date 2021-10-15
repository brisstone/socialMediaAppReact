import React from 'react'
import Feeds from '../components/feeds/Feeds'
import Rightbar from '../components/rightbar/Rightbar'
import Sidebar from '../components/sidebar/Sidebar'
import Topbar from '../components/topbar/Topbar'

import "./Home.css"

export default function Home() {
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
            <Sidebar/>
            <Feeds/>
            <Rightbar/> 
            </div>
            
        </>
    )
}
