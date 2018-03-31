import React, { Component } from 'react';
import './App.css';



//Functional component using props
function Welcome(props) {
    return <h1>Welcome to {props.name}</h1>
}

//Assigning value(s) to props
function App() {
    return <div className="App">
        <Welcome name ="React" />
    </div>
}


export default App;
