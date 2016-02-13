import { v4 as generateUUID } from 'node-uuid'
import { ADD_EXERCISE, EDIT_EXERCISE } from '../actions'

export const INITIAL_EXERCISES_STATE = {
  by_id: {},
  list: []
}

function createNewExercise(workoutId) {
  return {
    id: generateUUID(),
    name: '',
    workoutId
  }
}

export function exercises(state = initialState, action) {
  switch (action.type) {
    case ADD_EXERCISE:
      const newExercise = createNewExercise(action.workoutId)

      // add new exercise to exercises
      return Object.assign({}, state, {
        list: [
          ...state.list,
          newExercise
        ],
        by_id: Object.assign({}, state.by_id, {
          [newExercise.id]: newExercise
        })
      })
    case EDIT_EXERCISE:
      const exerciseId = action.id
      const existingExercise = state.by_id[exerciseId]
      const updatedExercise = Object.assign(
        {},
        existingExercise,
        { [action.property]: action.value }
      )

      // edit exercise by id
      return Object.assign({}, state, {
        list: state.list.map(
          (exercise) => (exerciseId === exercise.id) ? updatedExercise : exercise
        ),
        by_id: Object.assign({}, state.by_id, { [exerciseId]: updatedExercise })
      })
    default:
      return state
  }
}
