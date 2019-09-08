import React, { Component } from 'react';
import { connect } from 'react-redux';

import { findMovie } from '../../actions';
import './index.css';
import Index from "../movie";

class Search extends Component{

    componentDidMount() {
        this.props.findMovie(this.props.match.params.name);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.movieToSearch.search !== this.props.match.params.name && prevProps.movieToSearch.search !== '') {
            this.props.findMovie(this.props.match.params.name);
        }
    }

    render() {
        if(this.props.movieToSearch.loading){
            return (
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )
        }else if(this.props.movieToSearch.error){
            return (
                <div>
                    <p>{ this.props.movieToSearch.error }</p>
                </div>
            )
        }
        if (this.props.filtered.length > 0) {
            return (
                <div className="body">
                    <div>
                        <p>
                            Resultado De Busqueda:
                            <strong> {this.props.movieToSearch.search}</strong>
                        </p>
                        <p>Películas Catálogo Claro video</p>
                    </div>
                    <div className="card-search">
                        { this.props.filtered.map(m => <Index key={m.id} movie={m} img={m.image_medium}/>) }
                    </div>
                </div>
            )
        }
        return (
            <div className="body">
                <div>
                    <h1 className="notFind">
                        ¡Lo sentimos! Parece que no hay coincidencias para:
                        <strong> {this.props.movieToSearch.search}</strong>
                    </h1>
                    <span>Utiliza otras palabras clave.</span><br/>
                    <span>Busca el nombre del actor o director</span><br/>
                    <span>Prueba con un género</span>
                </div>
                <div className="card-search">
                    { this.props.filtered.map(m => <Index key={m.id} movie={m} img={m.image_medium}/>) }
                </div>
            </div>
        )

    }
}

function mapStateToProps(state) {
    const dataMovies = state.searchInfo;
    const filtered = [];

    dataMovies.movies.forEach((m) => {
        if (m.title.toUpperCase().match(new RegExp(dataMovies.search.toUpperCase()))) {
            filtered.push(m);
        }
    });

    return {
        movieToSearch: state.searchInfo,
        filtered
    }
}

export default connect(mapStateToProps, { findMovie })(Search);
