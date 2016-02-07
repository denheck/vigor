import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addWorkout } from '../actions'

class AddWorkout extends Component {
  render() {
    const { dispatch } = this.props;
    const onClick = () => dispatch(addWorkout())

    return (
      <button onClick={onClick}>Add New Workout</button>
    )
  }
}

AddWorkout.PropTypes = {
  // injected by connect
  dispatch: React.PropTypes.func.isRequired
}

export default connect()(AddWorkout);
