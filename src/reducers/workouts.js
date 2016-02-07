import { v4 as generateUUID } from 'node-uuid'
import { ADD_WORKOUT, SELECT_WORKOUT } from '../actions'

export const INITIAL_WORKOUTS_STATE = {
  by_id: {},
  list: [],
  selectedWorkout: ''
}

function createNewWorkout() {
  const date = new Date()

  return {
    id: generateUUID(),
    name: `New Workout - ${date.toString()}`,
    date
  }
}

export function workouts(state = initialState, action) {
  switch (action.type) {
    case ADD_WORKOUT:
      const newWorkout = createNewWorkout()

      // add new workout to workouts
      return Object.assign({}, state, {
        list: [
          ...state.list,
          newWorkout
        ],
        by_id: Object.assign({}, state.by_id, {
          [newWorkout.id]: newWorkout
        })
      })
    case SELECT_WORKOUT:
      // map selected workout id to "selectedWorkout" property on state
      return Object.assign({}, state, {
        selectedWorkout: action.id
      })
    default:
      return state
  }
}
