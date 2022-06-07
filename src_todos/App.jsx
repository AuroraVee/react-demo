import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'



export default class App extends Component {

  state = {
    todos: [
      { id: "1", name: "chifan", done: false },
      { id: "2", name: "sleep", done: true },
      { id: "3", name: "cook", done: false },
      { id: "4", name: "run", done: true },
    ]
  }

  addTodo = (todoObj) => {
    let { todos } = this.state

    this.setState({ todos: [todoObj, ...todos] })
  }

  changeTodo = (id, done) => {
    let { todos } = this.state
    let newtodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done }
      } else {
        return todo
      }
    })

    this.setState({ todos: newtodos })
  }


  deleteTodo = (id) => {
    let { todos } = this.state
    let newtodos = todos.filter((todo) => {
      return todo.id !== id
    })

    this.setState({ todos: newtodos })
  }

  checkTodo = (done) => {
    let { todos } = this.state
    let newTodos = todos.map((todo) => {
      return { ...todo, done }
    })

    this.setState({ todos: newTodos })
  }

  clearAllDone = () => {
    let { todos } = this.state
    let newtodos = todos.filter((todo) => {
      return !todo.done
    })

    this.setState({ todos: newtodos })
  }
  render () {
    return (
      <div className="todo-wrap">
        <Header addTodo={this.addTodo} />
        <List todos={this.state.todos} changeTodo={this.changeTodo} deleteTodo={this.deleteTodo} />
        <Footer todos={this.state.todos} checkTodo={this.checkTodo} clearAllDone={this.clearAllDone} />
      </div>
    )
  }
}
