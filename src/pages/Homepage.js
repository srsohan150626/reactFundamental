import React from 'react';
import Homebanner from "../components/functional/Homebanner";

const Homepage = () => {
    return (
        <div>
            <Homebanner title="React" subtitle="let's make some fun!" json={{name: "sohan", age: "26"}}/>
        </div>
    );
};

export default Homepage;