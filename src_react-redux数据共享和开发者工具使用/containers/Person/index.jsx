import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { connect } from 'react-redux'
import { createPersonAction } from '../../redux/actions/person'

class Person extends Component {
  add = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value
    const personObj = { name, age, id: nanoid() }
    this.props.add(personObj)
  }

  render() {
    return (
      <div>
        <h4>当前和是{this.props.sum}</h4>
        <input
          type="text"
          placeholder="输入名字"
          ref={(c) => (this.nameNode = c)}
        />
        <input
          type="text"
          placeholder="输入年龄"
          ref={(c) => (this.ageNode = c)}
        />
        <button onClick={this.add}>添加</button>
        <ul>
          {this.props.persons.map((personObj) => {
            return (
              <li key={personObj.id}>
                {personObj.name}---{personObj.age}{' '}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default connect((state) => ({ persons: state.rens, sum: state.he }), {
  add: createPersonAction,
})(Person)
