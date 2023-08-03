import { useRef } from 'react'
import { signUpAuth, useAuth, logout } from '../../Firebase/firebase'

//import { logout } from '../../Firebase/firebase'



 
//if (auth.uid) return <Redirect to='/' />

 export const SignUp = () => {

  const emailRef= useRef();
  const passwordRef=useRef();
  const currentUser= useAuth();
  //<div> Currently logged in as : { currentUser.email} </div>
  
  async function handleSubmit(e){
    e.preventDefault()
    try {
      await signUpAuth(emailRef.current.value, passwordRef.current.value);
    } catch{
      alert("This account already exist !");
    } 

  }
  async function handlelogout(){
    
    try{
await logout();
    }catch{
alert ("you are already Disconnected")
    }

  }  
   return (
  <div className="containers">
    <form className="white"  >
    
        <h5 className="title">Sign Up</h5>

        <div className="inputContainer">
        <label className='label' htmlFor="email">Email</label>
        <input className='input' ref={emailRef} type="email" id='email'  />
      </div>

      <div className="inputContainer">
        <label className='label' htmlFor="password">Password</label>
        <input className='input' ref={passwordRef} type="password" id='password'  />
      </div>

        <div className="inputContainer">
          <label className='label' htmlFor="firstName">First Name</label>
          <input className='input' type="text" id='firstName'  />
        </div>

        <div className="inputContainer">
          <label className='label' htmlFor="lastName">Last Name</label>
          <input className='input' type="text" id='lastName'  />
        </div>

        <div className="subBtn">
          
          <button  onClick={handleSubmit} className="submitBtn">Sign Up</button>
          
          
          
        </div>
      </form>
      
    </div> 
   )
 }
 

export default SignUp


/*
*/

     

    
    
    