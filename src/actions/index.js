export const ADD_WORKOUT = 'ADD_WORKOUT'
export const SELECT_WORKOUT = 'SELECT_WORKOUT'
export const ADD_EXERCISE = 'ADD_EXERCISE'
export const EDIT_EXERCISE = 'EDIT_EXERCISE'

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

export function addExercise(workoutId) {
  return {
    type: ADD_EXERCISE,
    workoutId
  }
}

export function editExercise(id, property, value) {
  return {
    type: EDIT_EXERCISE,
    id,
    property,
    value
  }
}
