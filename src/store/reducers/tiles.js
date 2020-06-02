const initialState = {
    tiles: null,
    loading: false,
    error: false
};

export const updateObject = (oldObject, updatedProperties) => {
    return { ...oldObject,  ...updatedProperties }
};

const customSort = (prop) => {
    return (a, b) => a[prop].localeCompare(b[prop])
}

const customFilter = (obj, tilesType) => {
    const tiles = obj.data.entries.filter( res => 
        res.programType === tilesType && res.releaseYear >= 2010 ).sort(customSort('title')).slice(0, 21) ;
    return tiles
}

const getTiles = (state, action) => {
    return updateObject( state, { error: false, loading: true } );
}

const setTiles = (state, action) => {
    return updateObject( state, { tiles: customFilter(action.tiles, action.tilesType) , error: false, loading: false } );
};

const fetchTilesFailed = (state, action) => {
    return updateObject( state, { error: true, loading: false } );
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case 'GET': return getTiles(state, action); 
        case 'SET': return setTiles(state, action);    
        case 'FAILED': return fetchTilesFailed(state, action);
        default: return state;
    }
};

export default reducer;