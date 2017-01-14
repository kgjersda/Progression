<style src="./css/app.scss" lang="scss"></style>
<template>
    <section class="exerciseapp">
        <!-- header -->
        <header class="header">
            <h1>Progression: </h1>
        </header>
        <section>
            <userlogin :user="user"></userlogin>
            <usertrainingdays :user="user"></usertrainingdays>
            <!--<userexercises :exercises="user.exercises"></userexercises>-->
        </section>
        <section class="availableExercises">
            <h2>Exercise list:</h2>
            <input class="new-exercise" autofocus autocomplete="off" 
            placeholder="Exercise?" 
            @keyup.enter="addExercise" />
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
    import userlogin from './components/userlogin/userlogin.vue'
    import userexercises from './components/user/userexercises.vue'
    import usertrainingdays from './components/user/usertrainingdays.vue'

    export default {
        components: {
            'exercise': exercise,
            'userlogin': userlogin,
            'userexercises': userexercises,
            'usertrainingdays': usertrainingdays
        },
        computed: {
            exercises() {
                return this.$store.state.exercises
            },
            user() {
                return this.$store.state.user
            }
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