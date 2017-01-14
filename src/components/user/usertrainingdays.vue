<template>
    <div id="usertrainingdays">
        <h2>User.TrainingDays</h2>
        <button @click="addNewTrainingDay({})">Add day</button>
        <div class="trainingday" v-for="trainingDay in user.trainingDays">
            {{trainingDay.date}} - {{trainingDay.name}}
            <div>
                <h3>Add exercise group to this day</h3>
                <div v-for="group in exerciseGroups">
                    <span v-if="!trainingDayHasGroup({ trainingDay: trainingDay, group: group})">
                        {{group}}                          - 
                         <button @click="trainingDayAddGroup({trainingDay: trainingDay, group: group})" >Add group to day</button>
                    </span>
                </div>
                <!--<h3>Add exercise to day:</h3>
                <div v-for="exercise in allExercises">
                    {{exercise.text}} - <button @click="trainingDayAddExercise({trainingDay: trainingDay, exercise: exercise})">Add to day</button>
                </div>-->
                <h3> Exercises this day:</h3>
                <div v-for="exercise in trainingDay.exercises">
                    <h4>{{exercise.text}}</h4>
                    <div>
                        You have to do {{ exercise.result.length }} set(s).
                        
                        <div v-for="(item,index) in exercise.result">
                            Min {{ exercise.minimum[index] }} - Max {{exercise.maximum[index]}}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {
        mapMutations
    } from 'vuex'


    export default {
        name: 'usertrainingdays',
        props: ['user'],
        computed: {
            allExercises() {
                return this.$store.state.exercises
            },
            exerciseGroups() {
                return this.$store.state.exercises.map((item) => {
                        return item.group
                    })
                    .filter((elem, pos, arr) => arr.indexOf(elem) == pos); // unique
            }
        },
        methods: {
            ...mapMutations(['addNewTrainingDay',
                'trainingDayAddExercise',
                'trainingDayAddGroup'
            ]),
            trainingDayHasGroup({
                trainingDay,
                group
            }) {
                return trainingDay.exercises.findIndex((item) => {
                    return item.group === group
                }) > -1;
            },
            doneEdit(event) {
                const value = event.target.value.trim();
                if (parseInt(value) === "NaN") {
                    alert("Not a number")
                    return;
                } 
                
            }

        }

    }
</script>