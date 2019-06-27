import React, { Component } from 'react';

class FormThree extends React.Component {
    constructor(props){
        super(props);
        this.state = {number: "", expiration: "", billingZipCode: ""};
        this.handleChangeNumber = this.handleChangeNumber.bind(this); 
        this.handleChangeExpiration = this.handleChangeExpiration.bind(this); 
        this.handleChangeZipCode = this.handleChangeZipCode.bind(this); 
        this.passData = this.passData.bind(this); 
    };

    handleChangeNumber(event){
        this.setState({
            number: event.target.value
        });
    };

    handleChangeExpiration(event){
        this.setState({
            expiration: event.target.value
        });
    };

    handleChangeZipCode(event){
        this.setState({
            billingZipCode: event.target.value
        });
    };

    passData() {
        this.props.purchase(this.state)
    };

    render () {
        return (
            <div>
                <form>
                    <p>Enter Your Credit Card Information</p>
                    <label> Credit Card Number <input onChange={this.handleChangeNumber} type="text" value={this.state.number} /></label>
                    <label> Expiration Date <input onChange={this.handleChangeExpiration} type="text" value={this.state.expiration} /></label>
                    <label> Billing Zip Code <input onChange={this.handleChangeZipCode} type="text" value={this.state.billingZipCode} /></label>
                </form>
                <button onClick={this.passData}>next</button>
            </div>
        )
    };
};




export default FormThree;