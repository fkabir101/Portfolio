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
        <div className="card homeCard topCard w-100" onClick={this.redirect}>
          <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
          </div>
        </div>
      )
    }
    else if(this.props.title === 'Contact'){
      return(
        // <div className="card homeCard" onClick={this.redirect}>
        <div className="card homeCard w-100">
          <div className="card-body">
            <h5 className="card-title">{this.props.title}:</h5>
            <h5>stevenkurt64@gmail.com</h5>
          </div>
        </div>
      )      
    }
    else {
      return(
        <div className="card homeCard w-100">
          <div className="card-body">
            <h5 className="card-title">Links: </h5>
            <a href="https://www.instagram.com/"><img src='/images/icons/instagram.png' className = 'm-2' alt="Instagram Icon"/></a>
            <a href="https://www.facebook.com/"><img src='/images/icons/facebook.png' className = 'm-2' alt="Facebook Icon"/></a>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(Card);