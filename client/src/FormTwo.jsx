import React, { Component } from 'react';

class FormTwo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            line1: "",
            line2: "",
            city: "",
            state: "",
            zipCode: ""
        };
        this.handleChangeLine1 = this.handleChangeLine1.bind(this); 
        this.handleChangeLine2 = this.handleChangeLine2.bind(this); 
        this.handleChangeCity = this.handleChangeCity.bind(this); 
        this.handleChangeState = this.handleChangeState.bind(this); 
        this.handleChangeZipCode = this.handleChangeZipCode.bind(this); 
        this.passData = this.passData.bind(this); 
    };

    handleChangeLine1(event){
        this.setState({
            line1: event.target.value
        });
    };

    handleChangeLine2(event){
        this.setState({
            line2: event.target.value
        });
    };

    handleChangeCity(event){
        this.setState({
            city: event.target.value
        });
    };

    handleChangeState(event){
        this.setState({
            state: event.target.value
        });
    };

    handleChangeZipCode(event){
        this.setState({
            zipCode: event.target.value
        });
    };

    passData() {
        this.props.toFormThree(this.state)
    };

    render () {
        return (
            <div>
                <p>Enter Your Address</p>
                <form>
                    <label> Line 1 <input name='line1' onChange={this.handleChangeLine1} type="text" value={this.state.line1} /></label>
                    <label> Line 2  <input onChange={this.handleChangeLine2} type="text" value={this.state.line2} /></label>
                    <label> City <input onChange={this.handleChangeCity} type="text" value={this.state.city}  /></label>
                    <label> State <input onChange={this.handleChangeState} type="text" value={this.state.state} /></label>
                    <label> Zip Code <input onChange={this.handleChangeZipCode} type="text" value={this.state.zipCode} /></label>
                </form>
                <button onClick={this.passData}>next</button>
            </div>
        )
    };
};

export default FormTwo;