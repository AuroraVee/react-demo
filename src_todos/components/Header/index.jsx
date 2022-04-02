import { Component } from "react"
import PropTypes from 'prop-types'
import { nanoid } from "nanoid"
import './index.module.css'

export default class Header extends Component {

  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp} />
      </div>
    )
  }

  handleKeyUp = (event) => {
    const { keyCode, target } = event
    if (keyCode !== 13) {
      return
    } else {
      if (target.value === "") {
        alert("不能为空")
        return
      }
      this.props.addTodo({ id: nanoid(), name: target.value, done: false })
    }

  }
}




