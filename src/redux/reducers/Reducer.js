let initialState = {movies:[],genres:[],moviedeteil:[]}

 export const rootReduser = (state=initialState,action) => {
    switch (action.type){
        case 'getMovies':
            return {...state,movies: [...action.payload]}
        case  'getGenres':
            return {...state,genres:[...action.payload]}
        case 'getMovieDetail':
            return {...state,moviedeteil:[...action.payload]}
        default:
            return ''
    }
}