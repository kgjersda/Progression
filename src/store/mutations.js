export const STORAGE_KEY = 'progression-vuejs'

export const state = {
    exercises: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
}

export const mutations = {
    addExercise(state, {
        text
    }) {
        state.exercises.push({ 
            text,
            done: false
        })
    },

    deleteExercise(state, {
        exercise
    }) {
        state.exercises.splice(state.exercises.indexOf(exercise), 1)
    },

    editExercise(state, {
        exercise,
        value
    }) {
        exercise.text = value;
    },

    toggleExercise(state, {exercise}) {
        exercise.done = !exercise.done
    }

}