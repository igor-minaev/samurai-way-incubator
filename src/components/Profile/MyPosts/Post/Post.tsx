import React from 'react'
import s from "./Post.module.css"

const Post = () => {
    return (
        <div className={s.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdqPun8pQv5NsxtjeV2ZTDGQy-nkGuTXL3g&usqp=CAU" alt="avatar"/>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
               
    )
}

export default Post;