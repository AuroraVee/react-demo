import React, { Component } from 'react';

const DetailData = [
    { id: "01", content: "ttttttttt" },
    { id: "02", content: "fffffffff" },
    { id: "03", content: "tyyyyyyyyy" },
];

export default class Detail extends Component {

    render () {
        console.log(this.props);
        //取出参数
        let search = new URLSearchParams(this.props.location.search);
        const id = search.get("id");
        const title = search.get("title");

        let res = DetailData.find((obj) => {
            return obj.id === id;
        });
        return (
            <div>
                <ul>
                    <li>{id}</li>
                    <li>{title}</li>
                    <li>{res.content}</li>
                </ul>
            </div>
        );
    }
}
