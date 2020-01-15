import React, {Component} from 'react';
class AboutPage extends Component{
  render(){
    return(
      <div>
        <link rel="stylesheet" type="text/css" href="./style/about.css"/>
        <div className = 'container'>
        <div className = 'row'>
          <div className = 'col-6'>
            <img src="/images/profile/website selfie.jpg"></img>
          </div>
          <div className = 'col-6'>
            <p>Photography, Steven’s way
  I want to help you, you need pictures taken and i will help you with all my skills to get what you want. Instagram photos, pet photos, portraits, ect. i will happily do it all.
  When the time is right and you need it just let me know and it will get done swiftly and professionally and i guarantee satisfaction.
  
            </p>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default AboutPage
