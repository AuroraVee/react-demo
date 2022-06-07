
import React, { Component } from 'react';
//引入connect用于连接UI组件和redux
import { connect } from "react-redux";
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/actions/count";

//将UI组件和容器组件放在一个.jsx文件里

class Count extends Component {

  increment = () => {
    const { value } = this.selectNumber;
    // store.dispatch(createIncrementAction(value * 1));
    this.props.jia(value * 1);
  };

  decrement = () => {
    const { value } = this.selectNumber;

    // store.dispatch(createDecrementAction(value * (-1)));
    this.props.jian(value * (-1));
  };

  incrementOfOdd = () => {
    const { value } = this.selectNumber;

    // if (store.getState() % 2 === 1) {
    //     store.dispatch(createIncrementAction(value * 1));
    // }
    if (this.props.n % 2 === 1) {
      this.props.jia(value * 1);
    }
  };

  incrementAsync = () => {
    const { value } = this.selectNumber;

    //store.dispatch(createIncrementAsyncAction(value * 1, 5000));
    this.props.jiaAsync(value * 1, 5000);
  };

  render () {

    return (
      <div>
        <h4>当前总人数是{this.props.renshu}</h4>
        <p>当前求和为{this.props.n} </p>
        <select ref={(c) => this.selectNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> &nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementOfOdd}>当前求和为奇数时，加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>
      </div>
    );
  }
}

//!容器组件和UI组件建立联系,connect能自动检测state的变化，并进行页面重新渲染
export default connect(
  //由于采用combineReducers处理后，redux里存的是对象，所以这里要取出对应属性,重新作为props
  state => ({ n: state.he, renshu: state.rens.length }),
  /** mapDispatchToProps 一般写法*/
  // dispatch => (
  //   {
  //     jia: value => dispatch(createIncrementAction(value)),
  //     jian: value => dispatch(createDecrementAction(value)),
  //     jiaAsync: (value, time) => dispatch(createIncrementAsyncAction(value, time)),
  //   })
  /** mapDispatchToProps 简写，由react-redux自动调用dispatch*/
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction
  }
)(Count);

