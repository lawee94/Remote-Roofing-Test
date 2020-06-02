import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../store/action/tiles'

class Movies extends Component {

    componentDidMount(){
        this.props.onInitTiles('movie');
    }

    render(){ 

        let movies = this.props.error ? <p>Opps. something went wrong...</p> : <p>Loading...</p>;
        
        this.props.movies && this.props.movies.length > 0 && ( movies = (
            this.props.movies.map( (res, index) => (
                <div key={index} className='col-7'>
                    <img className='img-fluid' src={res.images['Poster Art'].url} alt='' />
                    <p>{res.title}</p>
                </div>
            ) )
        ))

        this.props.movies && this.props.movies.length <= 0 &&  ( movies = <p>No avalaible movie at the moment</p> )


        return(
            <div >
                <div className="w-100 bg-dark text-white py-2">
                    <h5 className='scale'>Popular Movies</h5>
                </div>
                <div className='row scale my-3' >
                   {movies}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        movies: state.tiles,
        error: state.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitTiles: (tilesType) => dispatch(actions.initTiles(tilesType)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( Movies );