import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addExercise, editExercise } from '../actions'
import ExerciseForm from '../components/ExerciseForm'

class EditableWorkoutForm extends Component {
  render() {
    const { workoutId, name, exercises, dispatch } = this.props

    if (!workoutId) {
      return null
    }

    const onExerciseChange = (exerciseId, property, value) =>
      dispatch(editExercise(exerciseId, property, value))
    const onExerciseAdd = (e) => {
      e.preventDefault()
      dispatch(addExercise(workoutId))
    }

    const exerciseForms = exercises.map((exercise, index) => (
      <ExerciseForm key={exercise.id}
                    id={exercise.id}
                    index={index + 1}
                    name={exercise.name}
                    onChange={onExerciseChange} />
    ))

    return (
      <div>
        <h3>{name}</h3>
        <form>
          {exerciseForms}
          <button onClick={onExerciseAdd}>Add Exercise</button>
        </form>
      </div>
    )
  }
}

EditableWorkoutForm.propTypes = {
  workoutId: React.PropTypes.string,
  name: React.PropTypes.string,
  exercises: React.PropTypes.array,

  // injected by connect
  dispatch: React.PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const workouts = state.entities.workouts
  const exercises = state.entities.exercises.list
  const selectedWorkout = workouts.selectedWorkout
  const workout = workouts.by_id[selectedWorkout] || {}

  return {
    workoutId: workout.id || null,
    name: workout.name || null,
    exercises: exercises.filter((exercise) => exercise.workoutId === workout.id)
  }
}

export default connect(mapStateToProps)(EditableWorkoutForm)
