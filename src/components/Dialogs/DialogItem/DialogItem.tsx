import React from 'react';
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

export type DialogType = {
    id: string
    name: string
}

export const DialogItem = (props: DialogType) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    )
}




