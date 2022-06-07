import React from 'react';

export default function Demo () {

    const [count, setCount] = React.useState(0);

    function add () {
        setCount((count) => count + 1);
    }

    return (
        <div>
            <h2>当前求和为{count}</h2>
            <button onClick={add}>+1</button>
        </div>
    );
}
