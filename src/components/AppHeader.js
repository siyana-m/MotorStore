import React from 'react';
import '../style/AppHeader.css';
import SideBar from './SideBar'

/*
function AppHeader(){
    return (
        <div className="header">
            Header
        </div>
    );
}
*/


function AppHeader(){
    return (
        <div className="header">
            <SideBar/>
        </div>
    );
}


export default AppHeader