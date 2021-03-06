import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react"
import { TodoBanner } from "./components/TodoBanner";
import { TodoRow } from "./components/TodoRow";
import { TodoCreator } from "./components/TodoCreator";
import { VisibilityControl } from "./components/VisibilityControl";


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
            showCompleted: true
        }
    }
    updateNewTextValue = (event) => {
        this.setState({ newItemText: event.target.value })
    }
    createNewTodo = (task) => {
        if(!this.state.todoItems.find(item => item.action === task)) {
            this.setState({
                todoItems: [
                    ...this.state.todoItems,
                    {action: task, done: false}
                ],
            });
        };
    }
    toggleTodo = (todo) => this.setState({
        todoItems: this.state.todoItems.map(item => item.action === todo.action ? {...item, done: !item.done} : item)
    });
    todoTableRows = (doneValue) => this.state.todoItems.filter(item => item.done === doneValue).map(item =>
        <TodoRow key = {item.action} item = {item} callback = {this.toggleTodo} />
    )

  render() {
    return(
        <div>
            <TodoBanner name = {this.state.userName} tasks = {this.state.todoItems}/>
            <div className={"container-fluid"}>
                <TodoCreator callback = {this.createNewTodo}/>
                <table className = "table table-striped table-bordered">
                    <thead>
                        <tr><th>Opis</th><th>Wykonane</th></tr>
                    </thead>
                    <tbody>{this.todoTableRows(false)}</tbody>
                </table>
                <div className = "bg-secondary text-white text-center p-2">
                        <VisibilityControl description = "Wykonane zadania" isChecked = {this.state.showCompleted} callback = {(checked) => this.setState( { showCompleted: checked} )} />
                </div>
                {this.state.showCompleted &&
                    <table className = "table table-striped table-bordered">
                        <thead>
                            <tr><th>Opis</th><th>Wykonane</th></tr>
                        </thead>
                        <tbody>{this.todoTableRows(true)}</tbody>
                    </table>
                }
            </div>
        </div>
    )
  }
}

