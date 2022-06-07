import React from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

export default function Detail () {

    const [search, setSearch] = useSearchParams();
    const id = search.get("id");
    const title = search.get("title");
    const content = search.get("content");

    console.log(useLocation());

    function change () {
        setSearch("id=0000&title=哈哈&content=6666");
    }

    return (
        <div>
            <button onClick={change}>更新search参数</button>
            <ul>
                <li>{id}</li>
                <li>{title}</li>
                <li>{content}</li>
            </ul>
        </div>
    );
}
