import { INCREMENT, DECREMENT } from "./constant";

const initState = 0;

function countReducer(preState = initState, action) {
  const { type, data } = action;

  switch (type) {
    case INCREMENT:
      return preState + data;

    case DECREMENT:
      return preState + data;

    default: //初始化,这里使用函数默认参数来进行初始化，因为后面要求和，需要初值为0
      return preState;
  }
}

export default countReducer;
