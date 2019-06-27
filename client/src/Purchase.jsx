import React, { Component } from 'react';
// import App from "App.jsx"

class Purchase extends React.Component {
    constructor(props){
        super(props)
        this.state = {};
    }

    render () {
        return (
            <div onSubmit={(event) => {
                event.preventDefault();
                this.props.sendInfo();
            }}>
                <p> Summary </p>
                <button onClick={this.props.toHomePage}>purchase</button>
            </div>
        )
    }
} 



export default Purchase;