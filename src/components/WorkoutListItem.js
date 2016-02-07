import React, { Component } from 'react'

class WorkoutListItem extends Component {
  render() {
    const { isSelected, onClick } = this.props
    const style = {
      padding: '0.9em 1em',
      background: (isSelected) ? '#eee' : 'white'
    }

    return (
      <div style={style} onClick={onClick}>
        {this.props.children}
      </div>
    )
  }
}

WorkoutListItem.propTypes = {
  onClick: React.PropTypes.func.isRequired,
  isSelected: React.PropTypes.bool.isRequired
}

export default WorkoutListItem
