import React, { Component } from 'react'
import { connect } from 'react-redux'

class EditableWorkoutForm extends Component {
  render() {
    const { name } = this.props

    return (
      <form>
        <fieldset>
          <legend>Workout</legend>
          <h3>{name}</h3>
        </fieldset>
      </form>
    )
  }
}

EditableWorkoutForm.propTypes = {
  name: React.PropTypes.string.isRequired,
  // injected by connect
  dispatch: React.PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const workouts = state.entities.workouts
  const selectedWorkout = workouts.selectedWorkout
  const workout = workouts.by_id[selectedWorkout] || {}

  return {
    name: workout.name || ''
  }
}

export default connect(mapStateToProps)(EditableWorkoutForm)
