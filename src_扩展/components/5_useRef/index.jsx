import React from 'react';
import ReactDOM from "react-dom";

export default function Demo () {
    const [count, setCount] = React.useState(0);
    const myRef = React.useRef();

    function add () {
        setCount((count) => count + 1);
    }

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);

    function xiezai () {
        ReactDOM.unmountComponentAtNode(document.getElementById("root"));
    }

    function show () {
        alert(myRef.current.value);
    }
    return (
        <div>
            <h2>当前求和为{count}</h2>
            <button onClick={add}>+1</button>
            <button onClick={xiezai}>卸载组件</button>
            <input type="text" ref={myRef} />
            <button onClick={show}>提示</button>
        </div>
    );
}
