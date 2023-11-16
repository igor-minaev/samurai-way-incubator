import React from 'react'
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <>
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
            </nav>
            <div className={s.friends}>
                <div className={s.friend}></div>
            </div>
        </>
    )
}

export default Navbar;