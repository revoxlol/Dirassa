import { NavLink } from 'react-router-dom'
//import { logout } from '../../Firebase/firebase';

//import { logout } from '../../Firebase/firebase';
//<li><NavLink to='/' a onClick={handlelogout}> Log Out</NavLink></li>


//<li> <NavLink to='/'  className="btn btn-floating purple darken-1">DA</NavLink></li> 

 export const SignedIn = () => {
  return (
     <div >
     
     <ul className="right">
     <li><NavLink to='/create'>Anonymous Login</NavLink></li>
     </ul>
   
     </div>

        )
 }
 

export default SignedIn;