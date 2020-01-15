import React, { Component } from "react";
import { withRouter } from 'react-router';

class RenderNavbar extends Component {
  
  render() {
      return (
      <div>
        <ul className="nav justify-content-end">
          <li>
            <a className="btn btn-secondary" href="/about">About</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-secondary" href="/portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-secondary" href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    )  
  }
}


export default withRouter(RenderNavbar);