
//import { Link } from 'react-router-dom'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'
import { NavLink } from 'react-router-dom'


/*const getId=()=>{
  return {auth : firebase.auth}
  
}
const {auth} = this.props;
const links = auth.uid ? <SignedIn/> : <SignedOut/>*/
const NavBar = () => {
 
  return (
    <nav className="nav-wrapper  cyan darken-3 ">
      <div className="containesr">
      
      <NavLink to='/'  className="brand-logo">Dirassa</NavLink>
        <SignedIn />
        <SignedOut />
      </div>
    </nav>
  )
}

export default NavBar;