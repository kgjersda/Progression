export const STORAGE_KEY = 'progression-vuejs-exercises'
export const USERS_KEY = 'progression-vuejs-users'

const exercises = [{
        group: "Squats",
        text: "Squat 1",
        done: false,
        level: 1,
        minimum: [4,4,4],
        maximum: [8,8,8],
        result: [0,0,0],
    },
    {
        group: "Squats",
        text: "Squat 2",
        done: false,
        level: 2,
        minimum: [4,4,4],
        maximum: [8,8,8],
        result: [0,0,0],
    },
      {
        group: "Squats",
        text: "Squat 3",
        done: false,
        level: 3,
        minimum: [4,4,4],
        maximum: [8,8,8],
        result: [0,0,0],
    }
    // ,
    // {
    //     group: "Pullups",
    //     text: "Pullup 1",
    //     done: false,
    //     level: 1
    // },
    // {
    //     group: "Pullups",
    //     text: "Pullup 2",
    //     done: false,
    //     level: 2
    // },
]
const user = [{
    username: undefined,
    exercises: [],
    trainingDays: []
}]

export const state = {
    exercises: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || JSON.stringify(exercises)),
    user: JSON.parse(window.localStorage.getItem(USERS_KEY) || JSON.stringify(user))
}

state.user = {
    username: "Kenneth",
    exercises: [],
    trainingDays: [{
        date: new Date(),
        name: "Training Day",
        exercises: []
    }]

}

export const mutations = {

    // trainingDays
    addNewTrainingDay(state, {}) {
        state.user.trainingDays.push({
            date: new Date(),
            name: "Training Day",
            exercises: []
        })
    },
    trainingDayAddExercise(state, {
        trainingDay,
        exercise
    }) {
        trainingDay.exercises.push(exercise);
    },
    trainingDayAddGroup(state, {
        trainingDay,
        group
    }) {
        var exercises = state.exercises;
        var trainingDays = state.user.trainingDays;
        var previousLevel = 0;
        var nextLevel = 1;
        
        var thisDayIndex = trainingDays.indexOf(trainingDay);

        var previousDays = trainingDays.filter((item,index,source) => {  
            return item.exercises.filter((subItem) => { return subItem.group === group}).length > 0;
        })

        if (previousDays.length > 0) {
            var previousDay = previousDays[previousDays.length-1]
            var previousExercise = previousDay.exercises.find((item) => { return item.group == group});
            previousLevel = previousExercise.level;
            
        }

        var groupExercises  = exercises.filter((item) => { return item.group == group });
        var maxLevel = Math.max(...groupExercises.map((item) => { return item.level }));
        nextLevel = previousLevel +1;
        if (nextLevel > maxLevel) nextLevel = maxLevel;

        var nextExercise = exercises.find((item) => {
            return item.group === group && item.level === nextLevel;
        });
        trainingDay.exercises.push(nextExercise);
    },

    editResult(state, {
        result,
        value
    }) {
        result = value;
    },

    // user methods
    userAddExercise(state, {
        exercise
    }) {
        state.user.exercises.push(exercise);
    },
    userDeleteExercise(state, {
        exercise
    }) {
        state.user.exercises.splice(state.user.exercises.indexOf(exercise), 1)
    },

    // exercise list
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

    toggleExercise(state, {
        exercise
    }) {
        exercise.done = !exercise.done
    }

}