import Genres from "./components/genres/Genres";
import MoviesLists from "./components/movieslist/MoviesLists";
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route


} from "react-router-dom";

export default function App() {




    return (


       <div>
           <Router>
               <Link/>
               <MoviesLists/>
           <Genres/>
       </Router>
       </div>
  );
}


