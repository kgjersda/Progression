<style src="./css/app.scss" lang="scss"></style>
<template>
    <section class="exerciseapp">
        <!-- header -->
        <header class="header">
            <h1>exercises</h1>
            <input class="new-exercise" autofocus autocomplete="off" placeholder="Exercise?" @keyup.enter="addExercise" />
        </header>
        <section>
            <ul>
                <exercise v-for="exercise in exercises" :exercise="exercise"></exercise>
            </ul>
        </section>
        <footer>
        </footer>
    </section>
</template>
<script>
    import {
        mapMutations
    } from 'vuex'
    import exercise from './components/exercise/exercise.vue'

    export default {
        computed: {
            exercises() {
                return this.$store.state.exercises
            }
        },
        components: {
            'exercise': exercise
        },
        methods: {
            addExercise(event) {
                var text = event.target.value;
                if (text.trim()) {
                    this.$store.commit('addExercise', {
                        text
                    });
                }
                event.target.value = '';
            }
        }

    }
</script>