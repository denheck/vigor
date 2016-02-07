import React, { Component } from 'react'
import WorkoutListItem from './WorkoutListItem'

class WorkoutList extends Component {
  render() {
    const { onWorkoutClick, selectedWorkout, workouts } = this.props
    const workoutListItems = workouts.map((workout) => {
      return (
        <WorkoutListItem key={workout.id}
                         onClick={() => onWorkoutClick(workout.id)}
                         isSelected={workout.id === selectedWorkout}>
          {workout.name}
        </WorkoutListItem>
      )
    })

    return (
      <div>{workoutListItems}</div>
    )
  }
}

WorkoutList.propTypes = {
  onWorkoutClick: React.PropTypes.func.isRequired,
  selectedWorkout: React.PropTypes.string.isRequired,
  workouts: React.PropTypes.array.isRequired
};

export default WorkoutList
