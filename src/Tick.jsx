import React, { Component } from 'react'

export default class Tick extends Component {
    state = {
        second: 0
    }

    UpdateSecond = () => {
        this.setState({
            second: this.state.second + 1
        })
    }
    
    componentDidMount() {
        this.interval = setInterval(() => this.UpdateSecond(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        return (
            <div>Seconds : {this.state.second}</div>
        )
    }
}


