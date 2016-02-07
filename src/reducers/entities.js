import { ADD_WORKOUT, SELECT_WORKOUT } from '../actions'
import { workouts, INITIAL_WORKOUTS_STATE } from './workouts'

const initialState = {
  workouts: INITIAL_WORKOUTS_STATE
}

export default function entites(state = initialState, action) {
  switch (action.type) {
    case ADD_WORKOUT:
    case SELECT_WORKOUT:
      return Object.assign({}, state, {
        workouts: workouts(state.workouts, action)
      })
    default:
      return state
  }
}
