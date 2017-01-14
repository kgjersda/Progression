<template>
  <li class="todo" :class="{ completed: exercise.done }">
    <div class="view">
      <!--{{ exercise.text }}-->
      <!--<input class="toggle"
        type="checkbox"
        :checked="exercise.done"
        @change="toggleTodo({ todo: todo })">-->
      <label v-text="exercise.text" @dblclick="editing = true"></label> 
      <button class="destroy" @click="deleteExercise({ exercise: exercise })">Delete</button>
    </div>
    <input class="edit"
      v-show="editing"
      v-focus="editing"
      :value="exercise.text"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit">
  </li>
</template>
<script src="./exercise.js"></script>