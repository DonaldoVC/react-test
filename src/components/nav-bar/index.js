import React, { Component } from 'react';
import {Link} from "react-router-dom";
import SearchForm from './search.form';

import logo from '../../assets/img/clarovideo-logo.svg';
import './index.css';

class Navigation extends Component{
    state = {
        nameSearch: ''
    };

    submit = (values) => {
        this.props.history.push(`/search/${values.value}`);
    };

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg">
                    <Link className="logo" to="/">
                        <img src={logo} alt="logo" className="img-logo"/>
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Catálogo</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Género</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Canales</Link>
                            </li>
                        </ul>
                        <SearchForm onSubmit={this.submit} />
                    </div>
                    <div>
                        <button className="btn btn-outline-light my-2 my-sm-0" type="button">Ingresar</button>
                        <button className="btn btn-outline-light my-2 my-sm-0" type="button">Registrarse</button>
                    </div>
                </nav>
                <hr/>
            </div>
        )
    }
}

export default Navigation;
