import React, {Component} from 'react';
import Card from '../components/cards/cards'
class HomePage extends Component{

  render(){
    return(
      <div>
      <link rel="stylesheet" type="text/css" href="./style/home.css"/>
        <div className = 'homepage'>
          <div className = 'container'>
            <div className = 'row d-flex justify-content-center'>
            <div className="col-md-5 col-sm-12 ">
              <Card title = 'About'></Card>
            </div>
            <div className="col-md-5 col-sm-12 ">
              <Card title = 'Portfolio'></Card>
            </div>
            </div>
            <div className = 'row d-flex justify-content-center'>
              <div className="col-md-5 col-sm-12 ">
                <Card title = 'Contact'></Card>
              </div>
              <div className="col-md-5 col-sm-12">
                <Card title = 'Links'></Card>
              </div> 
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;