import React from 'react'
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    const posts = [
        {id: '1', message: 'Hi, how are you?', likeCounts: 10},
        {id: '2', message: 'Hi, I\'m good', likeCounts: 3}
    ]

    const postsElements = posts.map(p => {
        return <Post key={p.id} message={p.message} likeCounts={p.likeCounts}/>
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