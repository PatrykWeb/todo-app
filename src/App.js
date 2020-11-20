import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react"


export default class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: "Adam",
            todoItems: [
                {action: "Kupić test", done: false},
                {action: "Kupić test2", done: false},
                {action: "Zebrać bilety", done: true},
                {action: "Zadzwonić do kogoś", done: false},
            ],
            newItemText: ""
        }
    }

    changeStateData = () => {
        this.setState({userName: this.state.userName === "Adam" ? "Jakub" : "Adam"})
    }
    createNewTodo = () => {
        if(!this.state.todoItems.find(item => item.action === this.state.newItemText)) {
            this.setState({
                todoItems: [
                    ...this.state.todoItems,
                    {action: this.state.newItemText, done: false}
                ],
                newItemText: ""
            });
        };
    }
    toggleTodo = (todo) => this.setState({
        todoItems: this.state.todoItems.map(item => item.action === todo.action ? {...item, done: !item.done} : item)
    });
    todoTableRows = () => this.state.todoItems.map(item =>
        <tr key ={item.action}>
            <td>{item.action}</td>
            <td>
                <input type="checkbox" checked = {item.done} onChange={() => this.toggleTodo(item)}/>
            </td>
        </tr>
    )

  render() {
    return(
        <div>
          <h4 className={"bg-primary text-white text-center p-2"}>
            Lista zadań użytkownika {this.state.userName}
            (Liczba zadań: {this.state.todoItems.filter(t => !t.done).length})
          </h4>
            <div className={"container-fluid"}>
                <div className={"my-1"}>
                    <input className={"form-control"} value={this.state.newItemText} onChange={(event => this.setState({newItemText: event.target.value}))}/>
                    <button className = "btn btn-primary mt-1" onClick={this.createNewTodo}>Dodaj</button>
                </div>
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr><th>Opis</th><th>Wykonane</th></tr>
                    </thead>
                    <tbody>{this.todoTableRows()}</tbody>
                </table>
            </div>
        </div>
    )
  }
}

