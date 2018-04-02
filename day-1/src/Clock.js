import React, { Component } from 'react';

export default class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {message: ''};
        this.state = {date: new Date()};

        console.log("I'm the constructor!")
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
        this.newString();
        console.log("I'm the componentDidMount!");
    }

    componentWillUnmount() {
        clearInterval(this.timerID);

        console.log("I'm the componentWillUnmount!");
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    newString() {
        this.setState({
            message: 'This is a React driven timer!'
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>

        );
        console.log("I'm the render!")
    }
}