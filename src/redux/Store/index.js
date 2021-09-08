import {createStore} from "redux";
import {rootReduser} from "../reducers/Reducer";

 export let store = createStore(rootReduser)