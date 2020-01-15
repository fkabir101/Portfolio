import React, {Component} from 'react';
import './style/card.css'
import {withRouter} from 'react-router-dom';

class Card extends Component{
  redirect = ()=>{
    console.log(this.props.title);
    this.props.history.push(`/${this.props.title}`);
  }
  render(){
    if(this.props.title !== 'Links' && this.props.title !== 'Contact')
    {
      return(
        <div className="card homeCard topCard" onClick={this.redirect}>
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
          </div>
        </div>
      )
    }
    else if(this.props.title === 'Contact'){
      return(
        <div className="card homeCard" onClick={this.redirect}>
          <div className="card-body">
            <h4 className="card-title">{this.props.title}</h4>
            <h5>something@somthing.com</h5>
            <h5>Contact Form</h5>
          </div>
        </div>
      )      
    }
    else {
      return(
        <div className="card homeCard">
          <div className="card-body">
            <h4 className="card-title">Links: </h4>
            <img src='/images/icons/instagram.png' className = 'm-2' alt="Instagram Icon"/>
            <img src='/images/icons/facebook.png' className = 'm-2' alt="Instagram Icon"/>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(Card);