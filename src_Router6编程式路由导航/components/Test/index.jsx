import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Test () {
    const nav = useNavigate();
    function go () {
        nav(1);
    }

    function back () {
        nav(-1);
    }

    return (
        <div>Test
            <button onClick={go}>εθΏ</button>
            <button onClick={back}>ει</button>
        </div>
    );
}
