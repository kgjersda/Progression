  import {
      mapMutations
  } from 'vuex'

  export default {
      name: 'exercise',
      props: ['exercise'],
      data() {
          return {
              editing: false
          }
      },
      directives: {
          focus(el, {
              value
          }, {
              context
          }) {
              if (value) {
                  context.$nextTick(() => {
                      el.focus()
                  })
              }
          }
      },
      methods: {
          ...mapMutations(
              ['deleteExercise',
                  'editExercise'
              ]),
          doneEdit(event) {
              const value = event.target.value.trim();

              const {
                  exercise
              } = this
              if (!value) {
                  this.deleteExercise({
                      exercise
                  })
              } else if (this.editing) {
                  this.editExercise({
                      exercise,
                      value
                  })
              }
              this.editing = false
          }
      }

  }