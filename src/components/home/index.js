import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovies } from '../../actions'
import Index from '../movie';
import './index.css';

class Home extends Component{

    componentDidMount() {
        this.props.getMovies();
    }

    render() {
        if(this.props.dataMovies.loading){
            return (
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )
        }else if(this.props.dataMovies.error){
            return (
                <div>
                    <p>{ this.props.dataMovies.error }</p>
                </div>
            )
        }
        return (
            <div className="card-body">
                { this.props.dataMovies.movies.map(m => <Index key={m.id} movie={m} img={m.image_small}/>) }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        dataMovies: state.dataMovies
    }
}

export default connect(mapStateToProps, { getMovies })(Home);
