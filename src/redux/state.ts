export type PostType = {
    id: string
    message: string
    likeCounts: number
}
export type DialogType = {
    id: string
    name: string
}
export type MessageType = {
    id: string
    message: string
}

export type ProfilePageType = {
    posts: PostType[]
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]

}

export type SidebarType = {
    friends: DialogType[]
}

export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


export const state: StateType = {
    profilePage: {
        posts: [
            {id: '1', message: 'Hi, how are you?', likeCounts: 10},
            {id: '2', message: 'Hi, I\'m good', likeCounts: 3}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: '1', name: 'Dimych'},
            {id: '2', name: 'Andrey'},
            {id: '3', name: 'Sveta'},
            {id: '4', name: 'Sasha'},
            {id: '5', name: 'Viktor'},
            {id: '6', name: 'Valera'}
        ],
        messages: [
            {id: '1', message: 'Hi'},
            {id: '2', message: 'How are you?'},
            {id: '3', message: 'Yo'}
        ]
    },
    sidebar: {
        friends: [
            {id: '1', name: 'Dimych'},
            {id: '2', name: 'Andrey'},
            {id: '3', name: 'Sveta'}
        ]
    }
}