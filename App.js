import React, { Component } from 'react'
import SignIn from './component/auth/SignIn'
import SignUp from './component/auth/SignUp'
//import { render } from "react-dom";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import {ChildDashboard} from './component/Dashboards/ChildDashboard' 
import {MainDashboard} from './component/Dashboards/MainDashboard'
//import parentDashboard from './component/Dashboards/parentDashboard'
import NavBar from './component/layout/NavBar'
import ParentDashboard from './component/Dashboards/parentDashboard'
//import Slider from './component/Slider/Slider'
//import { signUpAuth } from './component/Firebase/firebase'
//import signUpAuth from './component/Firebase/firebase'

import FirstYear from './component/Years/PrimarySchool/FirstYear'
import SecondYear from './component/Years/PrimarySchool/SecondYear'
import ThirdYear from './component/Years/PrimarySchool/ThirdYear'
import FourthYear from './component/Years/PrimarySchool/FourthYear'
import FifthYear from './component/Years/PrimarySchool/FifthYear'
import YearsDashboard from './component/Dashboards/YearsDashboard'







class App extends Component {

  render() {

  return (
    <BrowserRouter>
    <div className="App">

<NavBar/>

    <div className='Maindash'>
    <Routes>
<Route exact path='/' element={<MainDashboard/>} />
<Route path='/parentdashboard' element={<ParentDashboard/>} />     
<Route path='/signup' element={<SignUp/>} />
<Route path='/signin' element={<SignIn/>} />

<Route path='/childdashboard' element={<ChildDashboard/>} />
<Route path='/primaryfirst' element={<FirstYear/>} />
<Route path='/primarysecond' element={<SecondYear/>} />
<Route path='/primarythird' element={<ThirdYear/>} />
<Route path='/primaryfourth' element={<FourthYear/>} />
<Route path='/primaryfifth' element={<FifthYear/>} />
<Route path='/yearsdashboard' element={<YearsDashboard/>} />


</Routes>
</div>
</div>
</BrowserRouter>
  );
}
}
export default App;
