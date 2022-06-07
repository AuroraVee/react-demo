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

    render () {
        const { msgArr } = this.state;
        return (
            <div>
                <ul>
                    {
                        msgArr.map(({ id, title }) => {
                            return <li key={id}>
                                {/* 向路由组件传递state参数*/}
                                <Link to={{ pathname: "/home/msg/detail", state: { id: id, title: title } }}>{title}</Link>
                            </li>;

                        })
                    }
                </ul>
                {/* 无需声明接收state参数*/}
                <Route path="/home/msg/detail" component={Detail} />
            </div>
        );
    }
}
