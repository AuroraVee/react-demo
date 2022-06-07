//引入UI组件
import Count from "../../components/Count";

//引入connect用于连接UI组件和redux
import { connect } from "react-redux";
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count_action";

//mapStateToProps函数的返回值作为状态 传递给UI组件
//对象的key是props的key,对象的value是props的value

function mapStateToProps (state) {
  //state是react-redux调用a函数时，自动传的store参数
  return {
    n: state
  }; //必须传对象，因为props是对象
}

//返回操作状态的方法
function mapDispatchToProps (dispatch) {
  return {
    jia (value) {
      //通知redux执行action
      dispatch(createIncrementAction(value));
    },
    jian (value) {
      //通知redux执行action
      dispatch(createDecrementAction(value));
    },
    jiaAsync (value, time) {
      dispatch(createIncrementAsyncAction(value, time));
    }
  };
}

//容器组件和UI组件建立联系
export default connect(mapStateToProps, mapDispatchToProps)(Count);

