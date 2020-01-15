import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import InputField from '../components/form/inputfield'
import API from "../utils/api";

class Contact extends Component{
  constructor() {
    super();
    this.state = {
      email: "",
      message: "",

    };
  }

  updateValue = info =>{
    this.setState({[info.target.id]: info.target.value});
  }

  onClickFunction = ()=>{
    API.sendMail(this.state)
    .then(res => {
      this.props.history.push('/')
    })
    .catch(error => console.log(error)) 
  }

  render(){
    return(
      <div>
        <link rel="stylesheet" type="text/css" href="./style/contact.css"/>
        <div className="container"> 
            <form onSubmit = {this.onClickFunction}>
            <InputField 
              fieldName="Email"
              id="email"
              type="text"
              onChangeValue = {this.updateValue}
            />
            <InputField 
              fieldName="Message"
              size= "large"
              type="text"
              id="message"
              onChangeValue = {this.updateValue}
            />
            <button className="btn btn-primary" onClick="onClickFunction()">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;