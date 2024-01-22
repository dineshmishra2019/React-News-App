/* eslint-disable no-useless-constructor */
import React, { Component } from 'react'


export class Newsitems extends Component {
    constructor() {
        super();
    }
  render() {
    let {title, description, imageUri, url } = this.props;
    return (
        <div className="my-3">
           <div className="card" style={{width: "18rem'"}}/>
              <img src={imageUri} className="card-img-top" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <a href={url} target="_blank"  className="btn btn-primary" rel="noreferrer">Read More</a>
              </div>
           </div>
    );
  }
}

export default Newsitems
