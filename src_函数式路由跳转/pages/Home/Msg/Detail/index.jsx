import React, { Component } from 'react';

const DetailData = [
    { id: "01", content: "ttttttttt" },
    { id: "02", content: "fffffffff" },
    { id: "03", content: "tyyyyyyyyy" },
];

export default class Detail extends Component {

    render () {

        //取出params参数
        // const { id, title } = this.props.match.params;

        //取出search参数
        // let search = new URLSearchParams(this.props.location.search);
        // const id = search.get("id");
        // const title = search.get("title");

        //取出state参数
        const { id, title } = this.props.location.state;

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
