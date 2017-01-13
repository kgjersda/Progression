import {
    STORAGE_KEY
} from './mutations'


const subscribers = store => {
    store.subscribe((mutation, {
        exercises
    }) => {
        console.log("lol")
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(exercises))
    })
}

