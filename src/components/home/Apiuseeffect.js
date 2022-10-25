import React, {useEffect, useState} from 'react';
import axios from "axios";

const Apiuseeffect = () => {
    const [todo, setTodo] = useState([]);
    useEffect(() => {
        axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((resp) => {
            setTodo(resp.data);
        }).catch()
    })
    return (
        <div>
            {JSON.stringify(todo)}
        </div>
    );
};

export default Apiuseeffect;