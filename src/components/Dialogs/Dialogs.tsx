import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem, DialogType} from "./DialogItem/DialogItem";
import {Message, MessageType} from "./Message/Message";

type DialogsPropsType = {
    dialogs:DialogType[]
    messages:MessageType[]
}

export const Dialogs = (props:DialogsPropsType) => {
    const dialogsElements = props.dialogs.map(d => {
        return <DialogItem key={d.id} id={d.id} name={d.name}/>
    })

    const messagesElements = props.messages.map(m => {
        return <Message key={m.id} id={m.id} message={m.message}/>
    })
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
};
