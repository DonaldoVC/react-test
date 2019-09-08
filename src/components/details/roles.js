import React from 'react';

import './index.css';
import Role from "./role";

const Roles = (props) => {
    return (
        <div className="card-carousel">
            { props.role.talents.talent.map(t => <Role key={t.id} name={t.fullname} role={props.role.desc}/>) }
        </div>
    )
};

export default Roles;
