import React, { Component } from 'react';

import './App.css';

const githubUrl = "https://api.github.com/users/patrickhanson"

class App extends Component {
  state = {
    user: {},
    active: false
  }
  
  toggleTrue = () => {
    console.log("You toggled!")
    fetch(githubUrl)
      .then(res => res.json())
      .then(data => {
        this.setState({user: {avatar: data.avatar_url,
            name: data.name,
            company: data.company,
            location: data.location},
          active: true
      })
    })
  }

  toggleFalse = () => {
    console.log("You toggled again!")
    this.setState({active: false})
  }
  
  render() {
    let button

    if(this.state.active === false) {
      button = <button className="button" onClick={this.toggleTrue}>Toggle</button>
      return (button)
    } else {
      button = <button className="button" onClick={this.toggleFalse}>Toggle</button>
      return (
        <React.Fragment>
          {button}
          <div className="githubinfo">
            <img className="avatar" 
            alt="my_avatar"
            src={this.state.user.avatar} />
            <div className="name" >Name: {this.state.user.name}</div>
            <div className="company" >Company: {this.state.user.company}</div>
            <div className="location" >Location: {this.state.user.location}</div>
          </div>
        </React.Fragment>)
    }
  }
}

export default App;
