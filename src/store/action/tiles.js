import axios from 'axios';

export const getTiles = () => {
    return { type: 'GET' }
};

export const setTiles = ( tiles, tilesType ) => {
    return { type: 'SET', tiles, tilesType }
};

export const fetchTilesFailed = () => {
    return { type: 'FAILED' }
};

//Initialize the API JSON Feed
export const initTiles = (tilesType) => {
    return dispatch => {
        dispatch( getTiles() )
        axios.get( "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json" )
            .then( response => {
               dispatch( setTiles(response, tilesType) );
            } )
            .catch( error => {
                dispatch(fetchTilesFailed());
            } );
    };
};