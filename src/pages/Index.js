import React, {Component} from 'react';
import HomeBanner from "../components/class/HomeBanner";

class Index extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <HomeBanner title="React" subtitle="Class component"/>
            </div>
        );
    }
}

export default Index;