import React, { Component } from 'react'
import axios from "axios"
export default class Search extends Component {
    render () {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={c => { this.keyWordElement = c }} />
                    &nbsp;<button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }

    search = () => {
        const { keyWordElement: { value: keyWord } } = this
        const { updateAppState } = this.props

        updateAppState({
            isFirst: false,
            isLoading: true
        })

        axios.get(`/api/search/users?q=${keyWord}`).then(res => {

            const { items } = res.data
            updateAppState({ isLoading: false, users: items })
        }).catch(e => {
            console.log(e)
            updateAppState({
                isLoading: false, err: e.message
            })
        })

    }
}
