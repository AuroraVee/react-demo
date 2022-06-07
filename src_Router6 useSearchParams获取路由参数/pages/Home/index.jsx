
import React, { useState } from 'react';
import { Navigate, NavLink, Outlet } from 'react-router-dom';


export default function Home () {
    const [sum, setSum] = useState(0);
    return (
        <div>
            <h3>我是Home的内容</h3>
            {sum === 2 ? <Navigate to="/about"></Navigate> : <h4>当前的sum为{sum}</h4>}
            <button onClick={() => setSum(2)}> 点我将sum变为2</button>
            <div>
                <ul className="nav nav-tabs">
                    {/** 子级路由上默认不加/，表示在当前路径上 继续添加 /路径  */}
                    <li><NavLink to="news">News</NavLink></li>
                    <li> <NavLink to="msg">Message</NavLink></li>
                </ul>
            </div>
            {/** 指定路由组件呈现的位置 */}
            <Outlet></Outlet>
        </div>
    );
}

