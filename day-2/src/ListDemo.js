import React, { Component } from 'react';

function ListItem(props) {
    // Correct! There is no need to specify the key here:
    return <li>{props.value}</li>;
}


function NumberList(props) {
    const numbers = props.numbers;

    const listItems = numbers.map((number,index) =>
        <li key={index}>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}


class ListDemo extends Component {
    constructor(){
        super();
        this.state = {numbers: [1,2,3,4,5,6,7,8,9,10]};

    }
    render() {
        return (
            <div>
                <NumberList key={this.state} numbers={this.state.numbers} />
            </div>
        );
    }
}

export default ListDemo;