import {
    STORAGE_KEY, USERS_KEY
} from './mutations'


const subscribers = store => {
    store.subscribe((mutation, {
        exercises
    }) => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(exercises))
    }),

    store.subscribe((mutation, {
        user
    }) => {
        window.localStorage.setItem(USERS_KEY, JSON.stringify(user))
    })
}

