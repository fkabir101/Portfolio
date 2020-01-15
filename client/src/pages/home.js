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
              <Card title = 'About'></Card>
              <Card title = 'Portfolio'></Card>
            </div>
            <div className = 'row d-flex justify-content-center'>
              <Card title = 'Contact'></Card>
              <Card title = 'Links'></Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomePage;