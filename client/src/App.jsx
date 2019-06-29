import React, { Component } from 'react';
import CheckOut from "./CheckOut.jsx";
import FormOne from "./FormOne.jsx";
import FormTwo from "./FormTwo.jsx";
import FormThree from "./FormThree.jsx";
import Purchase from "./Purchase.jsx";

const serverUrl = 'http://localhost:5555/';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {  
            items: [],
            isEmptyState : true,
            name: '',
            email: '',
            password: '',
            line1: "",
            line2: "",
            city: "",
            state: "",
            zipCode: "",
            number: "", 
            expiration: "", 
            billingZipCode: ""
        };
        this.triggerCheckout = this.triggerCheckout.bind(this);
        this.triggerFormOne = this.triggerFormOne.bind(this); 
        this.triggerFormTwo = this.triggerFormTwo.bind(this); 
        this.triggerFormThree = this.triggerFormThree.bind(this); 
        this.triggerPurchase = this.triggerPurchase.bind(this); 
        this.getInfo = this.getInfo.bind(this)
    };

    triggerCheckout() {
        this.setState({
            isEmptyState: false,
            addCheckoutState: true
        });
    };

    triggerFormOne(data) {
        this.setState({
            isEmptyState: false,
            addCheckoutState: '',
            addFormOneState: true,
            name: data.name,
            email: data.email,
            password: data.password,
        
        });
    };

    triggerFormTwo(data) {
        this.setState({
            isEmptyState: false,
            addCheckoutState: '',
            addFormOneState: '',
            addFormTwoState: true,
            line1: data.line1,
            line2: data.line2,
            city: data.city,
            state: data.state,
            zipCode: data.zipCode
        });
    };

    triggerFormThree(data) {
        this.setState({
            isEmptyState: false,
            addCheckoutState: '',
            addFormOneState: '',
            addFormTwoState: '',
            addFormThreeState: true,
            number: data.number,
            expiration: data.expiration,
            billingZipCode: data.billingZipCode
        });
    };

    triggerPurchase() {
        console.log('clicks')
        this.setState({
            isEmptyState: false,
            addCheckoutState: '',
            addFormOneState: '',
            addFormTwoState: '',
            addFormThreeState: '',
            addPurchaseState: true
        })
        this.sendInfo();
        this.getInfo();
    };

    sendInfo() {
        const newItem = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            line1: this.state.line1,
            line2: this.state.line2,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            number: this.state.number,
            expiration: this.state.expiration,
            billingZipCode: this.state.billingZipCode
        };

        fetch(serverUrl, {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => this.getInfo)
    };

    componentDidMount() {
        this.getInfo()
    };

    getInfo() {
        fetch(serverUrl, {
            method: 'GET'
        })
        .then((data) => data.json())
        .then((data) => this.setState({
            'items': [data[data.length -1]]
        }))
        .then(() => console.log(this.state.items))   
    }

    render () {
        return(
        <div>
            {this.state.isEmptyState && <CheckOut checkigOut={this.triggerCheckout} />}
            {this.state.addCheckoutState && <FormOne toFormTwo={this.triggerFormOne}/>}
            {this.state.addFormOneState && <FormTwo toFormThree={this.triggerFormTwo}/>}
            {this.state.addFormTwoState && <FormThree purchase={this.triggerFormThree}/>}
            {this.state.addFormThreeState && <Purchase items={this.state.items} toHomePage={this.triggerPurchase} />}
            {this.state.addPurchaseState && <CheckOut/>}
        </div>
        )
    };
};

export default App;