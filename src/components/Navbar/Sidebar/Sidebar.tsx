import React from 'react';
import s from "../Navbar.module.css";
import {DialogType} from "../../../redux/state";

type SidebarPropsType = {
    friends: DialogType[]
}

const Sidebar = (props: SidebarPropsType) => {
    const mappedFriends = props.friends.map(f => {
        return <div className={s.friend} key={f.id}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdqPun8pQv5NsxtjeV2ZTDGQy-nkGuTXL3g&usqp=CAU"
                alt="avatar"/>
            <div className={s.name}>{f.name}</div>
        </div>
    })
    return (
        <div className={s.sidebar}>
            <h1>Friends</h1>
            <div className={s.friends}>
                {mappedFriends}
            </div>
        </div>
    );
};

export default Sidebar;