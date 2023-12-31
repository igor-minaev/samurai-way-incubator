import React from 'react';
import s from "./Dialogs.module.css"
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    state: DialogsPageType
}

export const Dialogs = (props: DialogsPropsType) => {
    const dialogsElements = props.state.dialogs.map(d => {
        return <DialogItem key={d.id} id={d.id} name={d.name}/>
    })

    const messagesElements = props.state.messages.map(m => {
        return <Message key={m.id} id={m.id} message={m.message}/>
    })

    const newMessageElement = React.createRef<HTMLTextAreaElement>()
    const addMessage = () => {
        let message = newMessageElement.current?.value
        alert(message)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <div>
                        <textarea ref={newMessageElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
