import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/store";
import App from "./App";
import { Provider } from "react-redux";

{
  /***给 所有容器组件传递store 批量*/
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//订阅redux的状态，发现变化后，执行回调，引起react重新执行render函数，从而引起页面变化
// store.subscribe(() => {
//   ReactDOM.render(<App />, document.getElementById("root"));
// });
