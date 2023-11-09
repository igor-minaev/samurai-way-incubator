import React from 'react'
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    const postsData = [
        {id: '1', message: 'Hi, how are you?', likeCounts: 10},
        {id: '2', message: 'Hi, I\'m good', likeCounts: 3}
    ]
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
                <Post message={postsData[0].message} likeCounts={postsData[0].likeCounts}/>
                <Post message={postsData[1].message} likeCounts={postsData[1].likeCounts}/>
            </div>
        </div>
    )
}

export default MyPosts;