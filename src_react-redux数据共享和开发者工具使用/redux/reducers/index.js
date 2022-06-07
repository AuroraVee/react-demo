import { combineReducers } from "redux";
import countReducer from "./count.js";
import personReducer from "./person";

//!combineReducers调用时传递的对象就是redux保存的总对象
//redux初始化时的数据{he:0,rens:[{ name: "tom", age: "18", id: "0001" }]}
export default combineReducers({
  he: countReducer,
  rens: personReducer,
});
