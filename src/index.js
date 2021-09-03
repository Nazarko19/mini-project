import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux'
import {Provider} from "react-redux";



let initialState = {movies:[],genres:[],images:[]}

const rootReduser = (state=initialState,action) => {
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
 let store = createStore(rootReduser)
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
