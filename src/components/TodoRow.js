import React, { Component } from "react";

export class TodoRow extends Component{
    render = () =>
        <tr>
            <td>{this.props.item.action}</td>
            <td><input type="checkbox" checked = {this.props.item.done} onchange={() => this.props.callback(this.props.item)}/></td>
        </tr>
}
