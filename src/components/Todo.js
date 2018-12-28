import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'

import { toggleTodo } from '../redux/actions.js'

const Todo = ({ todo, toggleTodo }) => {
  return (
    <li className="todo">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={cx(todo.completed && "completed")}
      >
        {todo.content}
      </span>
    </li> 
  )
}

export default connect(null, { toggleTodo })(Todo)