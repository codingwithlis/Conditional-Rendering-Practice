import React, { Component } from 'react';


class FormOne extends React.Component{
    constructor(props){
        super(props);
        this.state = { name: "", email: "", password: "" }
        this.handleChangeName = this.handleChangeName.bind(this); 
        this.handleChangeEmail = this.handleChangeEmail.bind(this); 
        this.handleChangePassword = this.handleChangePassword.bind(this); 
        this.passData = this.passData.bind(this); 
    };

    handleChangeName(event){
        this.setState({
            name: event.target.value
        });
    };

    handleChangeEmail(event){
        this.setState({
            email: event.target.value
        });
    };

    handleChangePassword(event){
        this.setState({
            password: event.target.value
        });
    };

    passData() {
        this.props.toFormTwo(this.state)
    };

    render(){
        return (
            <div>
                <p> Enter Your Personal Information</p>
                <form>
                    <label> Name <input onChange={this.handleChangeName} placeholder="Enter your full name" type="text" value={this.state.name}/></label>
                    <label> Email <input onChange={this.handleChangeEmail} placeholder="Enter your email address" type="text" value={this.state.email}/></label>
                    <label> Password <input onChange={this.handleChangePassword} placeholder="Enter your a new password" type="text" value={this.state.password}/></label>
                </form>
                <button onClick={this.passData}>next</button>
            </div>
        )
    };
};

export default FormOne;

