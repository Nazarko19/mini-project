

export default function App() {

let onSubmitForm = (e) => {
     e.preventDefault()
    let name = e.target.name.value
    let user = {name}
    addUser(user).then(value => {
        dispatch({type:'Push_Users',payload:value})
    })



    }
    //
    // let [form,setForm] = useState({name: 'name'})
    //
    //
    // const onChange = (e) => {
    //   setForm({...form,[e.target.name]:e.target.value})
    // }

    return (


       <div>

           <form onSubmit={onSubmitForm}>
               <input type="text" name={'name'}  />
               {/*value={form.name} onChange={onChange}*/}
               <button>addUser</button>
           </form>

           {
               users.map(value =><div>{value.name}</div>)
           }
       </div>
  );
}


