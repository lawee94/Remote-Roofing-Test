import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../store/action/tiles'

class Series extends Component {

    componentDidMount(){
        this.props.onInitTiles('series');
    }

    render(){ 

        let series = this.props.error ? <p>Opps. something went wrong...</p> : <p>Loading...</p>;
        
        this.props.series && this.props.series.length > 0 && ( series = (
            this.props.series.map( (res, index) => (
                <div key={index} className='col-7'>
                    <img className='img-fluid' src={res.images['Poster Art'].url} alt='' />
                    <p>{res.title}</p>
                </div>
            ) )
        ))

        this.props.series && this.props.series.length <= 0 &&  ( series = <p>No avalaible movie at the moment</p> )

        return(
            <div >
                <div className="w-100 bg-dark text-white py-2">
                    <h5 className='scale'>Popular Series</h5>
                </div>
                <div className='row scale my-3' >
                   {series}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        series: state.tiles,
        error: state.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitTiles: (tilesType) => dispatch(actions.initTiles(tilesType)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)( Series );