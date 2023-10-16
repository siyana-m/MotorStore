import React from "react";
import {Link} from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as FiIcons from "react-icons/fi";
import * as MdIcons from "react-icons/md";

function Navbar() {
    return(
        <>
        <nav>
            <Link to='/' >
                <BiIcons.BiHome/>
            </Link>
            <Link to='/contact' >
                <MdIcons.MdConnectWithoutContact/>
            </Link>
            <Link to='/settings' >
                <FiIcons.FiSettings/>
            </Link>
            <Link to='/cart' >
                <BsIcons.BsCart3/>
            </Link>
        </nav>
        </>
    )
}

export default Navbar