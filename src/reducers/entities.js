import { ADD_WORKOUT, SELECT_WORKOUT, ADD_EXERCISE, EDIT_EXERCISE } from '../actions'
import { workouts, INITIAL_WORKOUTS_STATE } from './workouts'
import { exercises, INITIAL_EXERCISES_STATE } from './exercises'

const initialState = {
  workouts: INITIAL_WORKOUTS_STATE,
  exercises: INITIAL_EXERCISES_STATE
}

export default function entites(state = initialState, action) {
  switch (action.type) {
    case ADD_WORKOUT:
    case SELECT_WORKOUT:
      return Object.assign({}, state, {
        workouts: workouts(state.workouts, action)
      })
    case ADD_EXERCISE:
    case EDIT_EXERCISE:
      return Object.assign({}, state, {
        exercises: exercises(state.exercises, action)
      })
    default:
      return state
  }
}
