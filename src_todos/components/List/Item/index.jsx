import React, { Component } from 'react'
import './index.module.css'


export default class Item extends Component {
    state = {
        mouse: false
    }

    render () {
        const { id, name, done } = this.props
        const { mouse } = this.state

        return (
            <li onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)} style={{ backgroundColor: mouse ? "#ddd" : "white" }}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleChange(id)} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{ display: mouse ? "block" : "none" }} onClick={this.handleDelete(id)}>删除</button>
            </li>
        )
    }

    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    handleChange = (id) => {
        return (event) => {
            this.props.changeTodo(id, event.target.checked)
        }
    }

    handleDelete = (id) => {
        return () => {
            if (window.confirm("确定删除吗？")) {
                this.props.deleteTodo(id)
            }
        }
    }
}
