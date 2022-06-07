import { ADD_PERSON } from "../constant";
//存储一系列对象
const INIT_STATE = [{ name: "tom", age: "18", id: "0001" }];

export default function (preState = INIT_STATE, action) {
  const { type, data } = action;
  switch (type) {
    case ADD_PERSON:
      return [data, ...preState];
    default:
      return preState;
  }
}
