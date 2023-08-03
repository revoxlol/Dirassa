import { useRef} from 'react'
import { login, useAuth  } from "../../Firebase/firebase"


export const SignIn = () => {
  const emailRef= useRef();
  const passwordRef=useRef();
 
  const currentUser= useAuth();
  async function handleLogin(){
   // try {
      await login(emailRef.current.value, passwordRef.current.value);
    //} catch{
     // alert("Wrong Combination of Email and password!");
    //} 
    
  }
  
    return (
      <div className="containers">
        <form className="white" >

          <h4 className="title">Sign In</h4>

          <div className="inputContainer">
          <label className='label' htmlFor="email">Email</label>
          <input className='input' ref={emailRef} type="email" id='email'  />
        </div>

        <div className="inputContainer">
          <label className='label' htmlFor="password">Password</label>
          <input className='input' ref={passwordRef} type="password" id='password'  />
        </div>

          <div className="inputContainer">
          <button  onClick={handleLogin} className="submitBtn">Log  in</button>
          </div>
          <div> Currently logged in as : { currentUser?.email  }  </div>
          
          
        </form>
      </div>
    )
  }


export default SignIn