import React from 'react'
import s from "./ProfileInfo.module.css"

export const ProfileInfo = () => {
    return (
        <>
            <div>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjXeGwxae3il227GwauWDhoncozPqrqfMEbA&usqp=CAU"
                    alt="image"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </>
    )
}

