import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getInfo } from '../../actions';
import './index.css'
import Roles from "../details/roles";

class Info extends Component{

    componentDidMount() {
        this.props.getInfo(this.props.match.params.id);
    }

    render() {
        if(this.props.infoMovie.loading){
            return (
                <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            )
        }
        if(this.props.infoMovie.error){
            return (
                <div>
                    <p>{ this.props.infoMovie.error }</p>
                </div>
            )
        }
        if (this.props.infoMovie.info.id) {
            const info = this.props.infoMovie.info;
            return (
                <div className="body">
                    <div className="row">
                        <div className="col-sm-4">
                            <img src={ info.image_large } alt=""/>
                        </div>
                        <div className="col-sm-5">
                            <div>
                                <h1>{ info.title }</h1>
                            </div>
                            <div>
                                <p>
                                    <strong>
                                        <b>{ info.extendedcommon.media.originaltitle } </b>
                                        <b className="space">({ info.extendedcommon.media.publishyear })</b>
                                        <b>{ info.extendedcommon.media.rating.code }</b>
                                    </strong>
                                </p>
                                <p>
                                    <span>{ info.extendedcommon.media.description_extended }</span>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <strong>Género: </strong>
                                    <span>{ info.extendedcommon.genres.genre.map((m, i) => i+1 < info.extendedcommon.genres.genre.length ? `${m.name}, ` : `${m.name}`) }</span>
                                </p>
                            </div>
                            <div>
                                <button className="btn btn-outline-light" type="button">Compartir</button>
                            </div>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                    <div className="talents">
                        <h4>Talentos</h4>
                        <div className="card-body">
                            { info.extendedcommon.roles.role.map(m => <Roles key={m.id} role={m}/>) }
                        </div>
                    </div>
                </div>
            )
        }
        return null
    }
}

function mapStateToProps(state) {
    return {
        infoMovie: state.infoMovie
    }
}

export default connect(mapStateToProps, { getInfo })(Info);
