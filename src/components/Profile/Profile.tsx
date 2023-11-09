import React from 'react'
import s from "./Profile.module.css"
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    const posts = [
        {id: '1', message: 'Hi, how are you?', likeCounts: 10},
        {id: '2', message: 'Hi, I\'m good', likeCounts: 3}
    ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile;