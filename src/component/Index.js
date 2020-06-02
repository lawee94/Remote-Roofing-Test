import React, { Component } from 'react';

import series from '../assests/series.PNG'
import movies from '../assests/movies.PNG'

class Index extends Component {

    nav = (page) => (
        this.props.history.push(page)
    )

    render(){ 
        
        return(
            <div>
                <div className="w-100 bg-dark  py-2">
                    <h5 className='scale'>Popular Tiles</h5>
                </div>

                <div className='row scale mb-5'>
                    <div onClick={() => this.nav('/series')} className='contentBox'>
                        <img src={series} alt='' />
                        <p>Popular Series</p>
                    </div>

                    <div onClick={() => this.nav('/movies')} className='contentBox'>
                        <img src={movies} alt='' />
                        <p>Popular Movies</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Index ;