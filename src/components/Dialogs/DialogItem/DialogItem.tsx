import React from 'react';
import s from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {DialogType} from "../../../redux/state";

export const DialogItem = (props: DialogType) => {
    let path = `/dialogs/${props.id}`
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdqPun8pQv5NsxtjeV2ZTDGQy-nkGuTXL3g&usqp=CAU"
                alt="avatar"/>
            <NavLink activeClassName={s.active} to={path}>{props.name}</NavLink>
        </div>
    )
}




