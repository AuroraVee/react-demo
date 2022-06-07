import { createStore, applyMiddleware } from "redux";
//引入thunk，支持异步action
import thunk from "redux-thunk";

//引入开发者工具，方便进行调试
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducers";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
