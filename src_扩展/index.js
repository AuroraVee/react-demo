import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

{
  /***给 所有容器组件传递store 批量*/
}
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

//订阅redux的状态，发现变化后，执行回调，引起react重新执行render函数，从而引起页面变化
// store.subscribe(() => {
//   ReactDOM.render(<App />, document.getElementById("root"));
// });
