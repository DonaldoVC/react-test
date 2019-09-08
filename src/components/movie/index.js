import React from 'react';
import { Link } from "react-router-dom";

import './index.css';

const Index = (props) => {
    return (
        <div className="card-carousel">
            <Link to={`/info/${props.movie.id}`} title={props.movie.title}>
                <img src={props.img} alt=""/>
            </Link>
        </div>
    )
};

export default Index;
