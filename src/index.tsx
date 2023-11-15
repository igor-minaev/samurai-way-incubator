import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

const posts = [
    {id: '1', message: 'Hi, how are you?', likeCounts: 10},
    {id: '2', message: 'Hi, I\'m good', likeCounts: 3}
]

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

ReactDOM.render(
    <BrowserRouter>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </BrowserRouter>,
    document.getElementById('root')
);