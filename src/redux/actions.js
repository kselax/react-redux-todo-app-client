import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from './actionTypes'

let nextId = 0

export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    content,
    id: ++nextId
  }
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
})

export const setFilter = filter => ({
  type: SET_FILTER,
  payload: { filter }
})