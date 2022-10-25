import React, {useState} from 'react';

const Homebanner = (props) => {
    const [color, setColor] = useState("Red");
    const newColor = () => {
      setColor("Green");
    }
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <h4>{props.json.name} {props.json.age}</h4>
            <h1>{color}</h1>
            <button onClick={newColor}>Change Me</button>
        </div>
    );
};

export default Homebanner;