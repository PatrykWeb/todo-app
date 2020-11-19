import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react"


export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: "Adam"
        }
    }
  render() {
    return(
        <div>
          <h4 className={"bg-primary text-white text-center p-2"}>
            Lista zadań użytkownika {this.state.userName}
          </h4>
        </div>
    )
  }
}

