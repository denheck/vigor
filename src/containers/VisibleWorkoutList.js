import { connect } from 'react-redux'
import WorkoutList from '../components/WorkoutList'
import { selectWorkout } from '../actions'

const mapStateToProps = (state) => {
  const workouts = state.entities.workouts

  return {
    workouts: workouts.list,
    selectedWorkout: workouts.selectedWorkout
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onWorkoutClick: (id) => dispatch(selectWorkout(id))
  }
}

const VisibleWorkoutList = connect(
  mapStateToProps,
  mapDispatchToProps
)(WorkoutList)

export default VisibleWorkoutList
