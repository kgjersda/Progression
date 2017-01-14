<template>
    <div id="userexercises">
        <h2>My exercises:</h2>
        <div v-for="exercise in exercises">
            {{ exercise.text }} 
            <button @click="userDeleteExercise({exercise: exercise})">Remove</button>
        </div>
        <h2>I can add:</h2>
        <div v-for="exercise in availableExercises">
            {{ exercise.text }} -
            <button @click="userAddExercise({exercise: exercise})">Add</button>
        </div>
    </div>
</template>
<script>
    import {
        mapMutations
    } from 'vuex'
    import exercise from '../exercise/exercise.vue'

    export default {
        components: {
            'exercise': exercise
        },
        computed: {
            availableExercises() {
                return this.$store.state.exercises
            }
        },
        name: 'userexercises',
        props: ['exercises'],
        methods: {
            ...mapMutations(['userAddExercise',
            'userDeleteExercise'])
        }
    }
</script>