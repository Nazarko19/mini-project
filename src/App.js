import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {addUser, getUsers} from "./servis/users.servis";


export default function App() {
    let state = useSelector(state => state)
    let {users} = state
    let dispatch = useDispatch()

    useEffect(()=>{
        getUsers().then(value => {
            dispatch({type: 'Fetch_Users',payload:value})
        })
    },[])


    const onSubmit = (e) => {
      e.preventDefault()
      let name =  e.target.name.value
        let user = {name}
        addUser(user).then(value => {
            console.log(value)
            dispatch({type: 'Add_User',payload:value})
        })
    }

    return (


       <div>

           <form onSubmit={onSubmit}>
               <input type="text" name={'name'}/>
               <button>add</button>
           </form>
           {
               users.map(value=><div>{value.name}</div>)
           }
       </div>
  );
}


