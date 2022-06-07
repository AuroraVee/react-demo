
import React from 'react';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Msg () {

    const [msg, setMsg] = useState([
        { id: "001", title: "消息1", content: "test1" },
        { id: "002", title: "消息3", content: "test3" },
        { id: "003", title: "消息3", content: "test3" },
    ]);

    return (
        <div>
            <ul>
                {
                    msg.map((obj) => {
                        return <li key={obj.id}> <Link to={`detail/${obj.id}/${obj.title}/${obj.content}`}>{obj.title}--{obj.content}</Link></li>;
                    })
                }
            </ul>
            <Outlet></Outlet>
        </div>
    );
}

