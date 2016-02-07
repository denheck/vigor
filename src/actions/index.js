export const ADD_WORKOUT = 'ADD_WORKOUT'
export const SELECT_WORKOUT = 'SELECT_WORKOUT'

export function addWorkout() {
  return {
    type: ADD_WORKOUT
  }
}

export function selectWorkout(id) {
  return {
    type: SELECT_WORKOUT,
    id
  }
}
