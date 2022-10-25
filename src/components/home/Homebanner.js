import React from 'react';

const Homebanner = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <h6>{props.json.name} {props.json.age}</h6>
        </div>
    );
};

export default Homebanner;