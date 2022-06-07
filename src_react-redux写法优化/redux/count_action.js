/**
 * 转为Count组件的action
 */
import { INCREMENT, DECREMENT } from "./constant";

export const createIncrementAction = (data) => ({ type: INCREMENT, data });

export const createDecrementAction = (data) => ({ type: DECREMENT, data });

//异步action,action的值为函数，异步action一般还要调用同步action
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      //一般是发出Ajax请求，拿完数据回来做同步action
      dispatch(createIncrementAction(data));
    }, time);
  };
};
