import React from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../redux/actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: '' }
  }

  hOnChange = (e) => {
    this.setState({ input: e.target.value })
  }

  hOnClick = () => {
    this.props.addTodo(this.state.input)
    this.setState({ input: '' })
  }

  render() {
    return (
      <div className="add-todo">
        <input
          value={this.state.input}
          onChange={this.hOnChange}
        />
        <button onClick={this.hOnClick}>
          Add Todo
        </button>
      </div>
    )
  }
}

export default connect(null, { addTodo })(AddTodo)