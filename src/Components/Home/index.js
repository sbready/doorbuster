import React, { Component } from 'react';
import Carousel from './Carousel';
import Stores from '../Stores';
class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <Stores />
            </div>
        );
    }
}

export default Home;
