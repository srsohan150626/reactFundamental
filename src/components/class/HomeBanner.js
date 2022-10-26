import React, {Component} from 'react';
import axios from "axios";

class HomeBanner extends Component {
    constructor() {
        super();
        this.state = {
            todolist: []
        }
    }

    GetName = () => {
        let name = this.name.value;
        alert(name);
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((resp) => {
            this.setState({todolist: resp.data})
        }).catch()
    }
    ActionClick = (id)=>{
        alert(id);
    }
    render() {
        const MyTodoList = this.state.todolist.map((item, i) => {
            return (
                <tr>
                    <td>{item.userId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{JSON.stringify(item.completed)}</td>
                    <td>
                        <button onClick={this.ActionClick.bind(this,item.id)} className="btn btn-success">Action</button>
                    </td>
                </tr>
            )
        })
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.subtitle}</p>
                <button onClick={() => this.setState({color: "Blue"})}>Blue</button>
                <input ref={(input) => this.name = input} className="form-control col-md-6" type="text"/>
                <button onClick={this.GetName} className="btn btn-primary">Submit</button>
                <br/>
                <table className="table table-bordered table-striped table-active mt-5">
                    <thead>
                    <th>userID</th>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>
                    </thead>
                    <tbody>
                    {MyTodoList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default HomeBanner;