import React from 'react'
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUtxIJcJTI8MUjqaBDRUD11pytL6p5oE0SUA&usqp=CAU"
                alt="logo"/>
        </header>
    )
}

export default Header;