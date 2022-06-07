
import React from 'react';
import { useState, } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';


export default function Msg () {

    const [msg, setMsg] = useState([
        { id: "001", title: "消息1", content: "test1" },
        { id: "002", title: "消息3", content: "test3" },
        { id: "003", title: "消息3", content: "test3" },
    ]);

    const nav = useNavigate();
    function show () {
        nav("detail", {
            replace: false,
            state: {
                id: "0000", title: "ww", content: "666"
            }
        });
    }

    return (
        <div>
            <button onClick={show}>查看详情</button>
            <ul>
                {
                    msg.map((obj) => {
                        return <li key={obj.id}> <Link to="detail" state={{ id: obj.id, title: obj.title, content: obj.content }}>{obj.title}--{obj.content}</Link></li>;
                    })
                }
            </ul>
            <Outlet></Outlet>
        </div>
    );
}

