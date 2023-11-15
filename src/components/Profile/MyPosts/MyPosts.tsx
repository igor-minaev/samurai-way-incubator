import React from 'react'
import s from "./MyPosts.module.css"
import Post, {PostType} from "./Post/Post";

type MyPostsPropsType = {
    posts: PostType[]
}
const MyPosts = (props: MyPostsPropsType) => {
    const postsElements = props.posts.map(p => {
        return <Post key={p.id} id={p.id} message={p.message} likeCounts={p.likeCounts}/>
    })
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;