import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Detail from './Detail';

export default class Msg extends Component {
    state = {
        msgArr: [
            { id: "01", title: "t1" },
            { id: "02", title: "t2" },
            { id: "03", title: "t3" },
        ]
    };

    showReplaceMsg = (id, title) => {
        //params参数
        //this.props.history.replace(`/home/msg/detail/${id}/${title}`);

        //search参数
        //this.props.history.replace(`/home/msg/detail?id=${id}&title=${title}`);

        //state参数
        this.props.history.replace(`/home/msg/detail`, { id, title });
    };

    showPushMsg = (id, title) => {
        //params参数
        //this.props.history.push(`/home/msg/detail/${id}/${title}`);

        //search参数
        //this.props.history.push(`/home/msg/detail?id=${id}&title=${title}`);

        //state参数
        this.props.history.push(`/home/msg/detail`, { id, title });
    };



    render () {
        const { msgArr } = this.state;
        return (
            <div>
                <ul>
                    {
                        msgArr.map(({ id, title }) => {
                            return <li key={id}>
                                {/* 向路由组件传递state参数*/}
                                {/* <Link to={`/home/msg/detail/${id}/${title}`}>{title}</Link> */}
                                &nbsp;<button onClick={() => this.showPushMsg(id, title)}>push查看</button>
                                &nbsp;<button onClick={() => this.showReplaceMsg(id, title)}>replace查看</button>
                            </li>;

                        })
                    }
                </ul>
                {/* 无需声明接收params参数*/}
                {/* <Route path="/home/msg/detail/:id/:title" component={Detail} /> */}

                {/* 无需声明接收search参数*/}
                {/* <Route path="/home/msg/detail" component={Detail} /> */}

                {/* 无需声明接收state参数*/}
                <Route path="/home/msg/detail" component={Detail} />


            </div>
        );
    }
}
