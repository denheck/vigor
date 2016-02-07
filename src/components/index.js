import Redux from 'redux'
import React, { Component } from 'react'
import VisibleWorkoutList from '../containers/VisibleWorkoutList'
import EditableWorkoutForm from '../containers/EditableWorkoutForm'
import AddWorkout from '../containers/AddWorkout'

export default class App extends Component {
  render() {
    return (
      // setup grid with "pure-g" and break into 1/3 with "pure-u-1-3" and 2/3 with "pure-u-2-3"
      <div className="pure-g">
        <div className="pure-u-1-3">
          <AddWorkout />
          <VisibleWorkoutList />
        </div>
        <div className="pure-u-2-3">
          <EditableWorkoutForm />
        </div>
      </div>
    );
  }
}
