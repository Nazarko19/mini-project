import Genres from "./components/genres/Genres";
import MoviesLists from "./components/movieslist/MoviesLists";
import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route


} from "react-router-dom";
import MoviesDetail from "./components/moviesdeteils/MoviesDetail";

export default function App() {




    return (


       <div>
           <Router>
               <div className={'header'}>
               <Link to={'/movies'}>Movies</Link>
               <Link to={'genres'}>Genres</Link>
       </div>
               <div>
                   <div className={'movies'}>
                   <Route path={'/movies'} component={MoviesLists}/>
                   </div>
                   <Route path={'/genres'} component={Genres}/>

                   <Route path={'/moviesDetails'} component={}/>
               </div>
       </Router>
       </div>
  );
}


