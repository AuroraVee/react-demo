import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MyNavLink extends Component {
    render () {
        //children属性保存了标签体的内容，并且保存在this.props里，这里不需要单独取出来了
        console.log(this.props.children);
        return (
            <NavLink
                className="list-group-item"
                {...this.props}
                activeClassName="selected"
            />
        );
    }
}
