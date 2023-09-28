import {React,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//toast.configure();

function AddPatient(){

    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[age,setAge] = useState('')

    const handleSubmit=(event)=>{
        const data = {firstName, lastName, age}
        axios.post("http://localhost:8080/clinicalservices/api/patients", data).then(res=>console.log(res.data));
     
    }


        return (<div className="container">
                 <ToastContainer autoClose={2000} 
                  position = {toast.POSITION.BOTTOM_CENTER}/>
                <h2>Create Patient:</h2>
                <form onSubmit={e => { e.preventDefault(); }}>
                First Name:<input type="text" name="firstName" onChange={e=>setFirstName(e.target.value)} align="left"/>
                Last Name:<input type="text" name="lastName" onChange={e=>setLastName(e.target.value)} align="left"/>
                Age:<input type="text" name="age" onChange={e=>setAge(e.target.value)} align="left"/>
                <button onClick={handleSubmit.bind(this)}>Confirm</button>
                </form>
                <Link  to={'/'}>Go Back</Link>
        </div>)
    
}

export default AddPatient;






