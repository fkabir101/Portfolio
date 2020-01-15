import React, {Component} from 'react';
import Gallery from 'react-grid-gallery';
import Images from '../json/portfolio.json'

class PortfolioPage extends Component{
  render(){
    return(
      <div>
        <link rel="stylesheet" type="text/css" href="./style/portfolio.css"/>
        <div className = "container">
          <Gallery images={Images}/>
        </div>
      </div>
    )
  }
}

export default PortfolioPage;