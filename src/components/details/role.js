import React from 'react';

import star from '../../assets/img/role-star.png';
import './index.css';

const Role = (props) => {
    return (
        <div className="card-carousel">
            <div>
                <img src={star} alt="" className="role"/>
            </div>
            <div>
                <strong>{ props.name }</strong>
                <p>{ props.role }</p>
            </div>
        </div>
    )
};

export default Role;
