import React from 'react'
import { connect } from 'react-redux'

import { getTodosByFilter } from '../redux/selectors'
import Todo from './Todo'

const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo, index) => (
          <Todo key={index} todo={todo} />))
        : 'Not exist'}
    </ul>
  )
}

const mapStateToProps = state => {
  const { visibilityFilter } = state
  const todos = getTodosByFilter(state, visibilityFilter)
  return { todos }
}

export default connect(mapStateToProps)(TodoList)