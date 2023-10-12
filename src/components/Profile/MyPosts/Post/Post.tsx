import React from 'react'
import s from "./Post.module.css"

type PostType = {
    message: string
    likeCounts: number
}

const Post = (props: PostType) => {
    return (
        <div className={s.item}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZdqPun8pQv5NsxtjeV2ZTDGQy-nkGuTXL3g&usqp=CAU"
                alt="avatar"/>
            {props.message}
            <div>
                <span>{props.likeCounts} like</span>
            </div>
        </div>

    )
}

export default Post;