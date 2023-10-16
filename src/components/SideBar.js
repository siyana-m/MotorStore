import React, { useState } from "react";
import {Link} from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SideBarData } from "../test_data/SideBarData";

import {IconContext} from "react-icons";
import '../style/SideBar.css';

export default function Sidebar() {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => (setSidebar(true))
    const hiddenSidebar = () => (setSidebar(false))

 //при затваряне на страничното меню на показ остават подменютата (motorcycle, tires, motorcycle parts) и х-чето, което ги отваря и затваря :/
 
    return(
        <>
        <IconContext.Provider value={{color: '#d0cbcb'}}>
         <div>
        <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar}/>
            </Link>   
        </div>   
        <nav className={ sidebar ? 'side-menu active':'side-menu' }>
            <ul className='side-menu-items'>
                <li className='sidebar-toggle'>
                    <Link to="#" className='side-bars'>
                      <AiIcons.AiOutlineClose onClick={hiddenSidebar}/>  
                    </Link>
                </li>
                {SideBarData.map((item,index)=>{
                    return(
                        <li key={index} className={item.cName}>
                            {item.title}
                        </li>
                    )}
                )}
            </ul>
        </nav>
        </IconContext.Provider>
        </>
    );
}
