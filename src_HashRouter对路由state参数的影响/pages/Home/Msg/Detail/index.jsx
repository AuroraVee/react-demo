import React, { Component } from 'react';

const DetailData = [
    { id: "01", content: "ttttttttt" },
    { id: "02", content: "fffffffff" },
    { id: "03", content: "tyyyyyyyyy" },
];

export default class Detail extends Component {

    render () {
        console.log(this.props);
        //εεΊεζ°
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
