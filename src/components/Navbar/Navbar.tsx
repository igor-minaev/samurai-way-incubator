import React from 'react'
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import {SidebarType} from "../../redux/state";

type NavbarPropsType = {
    state: SidebarType
}

const Navbar = (props: NavbarPropsType) => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings'>Settings</NavLink>
            </div>
            <Sidebar friends={props.state.friends}/>
        </nav>
    )
}

export default Navbar;