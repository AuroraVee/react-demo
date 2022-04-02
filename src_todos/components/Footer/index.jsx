import React, { Component } from 'react'
import './index.module.css'


export default class Footer extends Component {

    render () {
        const { todos } = this.props

        let doneCount = todos.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0)

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" checked={doneCount === todos.length && doneCount !== 0} onChange={this.handleCheck} />
                </label>
                <span>
                    <span>已完成{doneCount}</span> / 全部{todos.length}
                </span>
                <button className="btn btn-danger" onClick={this.handleDone}>清除已完成任务</button>
            </div>
        )
    }

    handleCheck = (event) => {
        this.props.checkTodo(event.target.checked)
    }

    handleDone = () => {
        this.props.clearAllDone()
    }
}
