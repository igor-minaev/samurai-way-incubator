import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


export const Dialogs = () => {
    const dialogs = [
        {id: '1', name: 'Dimych'},
        {id: '2', name: 'Andrey'},
        {id: '3', name: 'Sveta'},
        {id: '4', name: 'Sasha'},
        {id: '5', name: 'Viktor'},
        {id: '6', name: 'Valera'}
    ]

    const messages = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'Yo'}
    ]


    const dialogsElements = dialogs.map(d => {
        return <DialogItem key={d.id} id={d.id} name={d.name}/>
    })

    const messagesElements = messages.map(m => {
        return <Message key={m.id} message={m.message}/>
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
