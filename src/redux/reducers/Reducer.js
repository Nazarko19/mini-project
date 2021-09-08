let initialState = {movies:[],genres:[],images:[]}

 export const rootReduser = (state=initialState,action) => {
    switch (action.type){
        case 'getMovies':
            return {...state,movies: [...action.payload]}
        case  'getGenres':
            return {...state,genres:[...action.payload]}
        case 'getImages':
            return {...state,images:[...action.payload]}
        default:
            return ''
    }
}