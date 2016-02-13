import React, { Component } from 'react'

class ExerciseForm extends Component {
  handleChange(property) {
      const onChange = this.props.onChange

      return (e) => {
        onChange(this.props.id, property, e.target.value)
      }
  }

  render() {
    const handleChange = this.handleChange.bind(this);
    const { name, index } = this.props

    return (
      <fieldset>
        <legend>Exercise {index}</legend>
        <label>
          Name:
          <input type="text" value={name} onChange={handleChange('name')} />
        </label>
      </fieldset>
    )
  }
}

ExerciseForm.propTypes = {
  id: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
}

export default ExerciseForm
