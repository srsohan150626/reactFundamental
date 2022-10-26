import React, {useEffect, useState} from 'react';
import axios from "axios";

const List = () => {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((resp) => {
            setTodo(resp.data);
        }).catch()
    }, [])

    const deleteEvent = (id) => {
        alert(id)
    }
    const editEvent = (id) => {
        alert(id)
    }
    const viewEvent = (id) => {
        alert(id)
    }
    const todoList = todo.map((list, i) => {
        return (<tr>
                <td>{list.userId}</td>
                <td>{list.id}</td>
                <td>{list.title}</td>
                <td>{JSON.stringify(list.completed)}</td>
                <td>
                    <button onClick={editEvent.bind(this, list.id)} className="btn btn-outline-info">Edit</button>
                </td>
                <td>
                    <button onClick={deleteEvent.bind(this, list.id)} className="btn btn-outline-danger">Delete</button>
                </td>
                <td>
                    <button onClick={viewEvent.bind(this, list.id)} className="btn btn-outline-success">View</button>
                </td>
            </tr>
        )
    })
    return (
        <div>
            <table className="table table-striped table-bordered table-active">
                <thead>
                <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>
                    <th>completed</th>
                    <th>Edit</th>
                    <th>Delete</th>
                    <th>View</th>
                </tr>
                </thead>
                <tbody>
                {todoList}
                </tbody>
            </table>
        </div>
    );
};

export default List;