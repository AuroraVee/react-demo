//引入UI组件
import Count from "../../components/Count";

//引入connect用于连接UI组件和redux
import { connect } from "react-redux";
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count_action";


//容器组件和UI组件建立联系
export default connect(
  state => ({ n: state }),
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

