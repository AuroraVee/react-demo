import React, { Component } from 'react';
import axios from "axios";
import PubSub from 'pubsub-js';

export default class Search extends Component {
    render () {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={c => { this.keyWordElement = c; }} />
                    &nbsp;<button onClick={this.search}>Search</button>
                </div>
            </section>
        );
    }

    search = async () => {
        const { keyWordElement: { value: keyWord } } = this;

        PubSub.publish("update state", { isFirst: false, isLoading: true });

        // axios.get(`/api/search/users?q=${keyWord}`).then(res => {

        //     const { items } = res.data;
        //     PubSub.publish("update state", { isLoading: false, users: items });
        // }).catch(e => {
        //     PubSub.publish("update state", { isLoading: false, err: e.message });
        // });

        try {
            let response = await fetch(`/api/search/users2?q=${keyWord}`);
            let resData = await response.json();
            PubSub.publish("update state", { isLoading: false, users: resData.items });
        } catch (e) {
            console.log(e.message);
            PubSub.publish("update state", { isLoading: false, err: e.message });
        }
    };
}
