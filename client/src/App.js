import React,{useEffect,createContext,useReducer,useContext} from 'react';
import './App.css';
import {BrowserRouter,Route,Switch,useHistory,useLocation} from 'react-router-dom'
import Signin from './components/screens/Signin';
import Home from './components/screens/Home';
import Subscribe from './components/screens/Subscribe';
import Editions from './components/screens/Editions';
import Background from './components/Background';
import Post from './components/screens/Post';
import PostEditions from './components/screens/posts/PostEditions';
import PostSlides from './components/screens/posts/PostSlides';
import {reducer,initialState } from './reducers/userReducer'
import Users from './components/screens/Users';
import Appbar from './components/Appbar';
import Loading from './components/screens/Loading';
import Aboutus from './components/screens/Aboutus';
import Contributors from './components/screens/Contributors';
import PostMobileSlides from './components/screens/posts/PostMobileSlides';
import Flipbook from './components/screens/Flipbook';
import SingleBook from './components/screens/SingleBook';
import SigninPopUpTimeDelay from './components/screens/SigninPopUpTimeDelay';
import Editionfb4 from '../src/components/screens/both-device-editions/4-edition'
import Editionfb5 from '../src/components/screens/both-device-editions/5-edition'
import Editionfb6 from '../src/components/screens/both-device-editions/6-edition'
import Editionfb7 from '../src/components/screens/both-device-editions/7-edition'
import Editionfb8 from '../src/components/screens/both-device-editions/8-edition'
import Editionfb9 from '../src/components/screens/both-device-editions/9-edition'
import Editione4 from '../src/components/screens/both-device-editions/4edition'
import Editione5 from '../src/components/screens/both-device-editions/5edition'
import Editione6 from '../src/components/screens/both-device-editions/6edition'
import Editione7 from '../src/components/screens/both-device-editions/7edition'
import Editione8 from '../src/components/screens/both-device-editions/8edition'
import Editione9 from '../src/components/screens/both-device-editions/9edition'
import Newpassword from './components/screens/Newpassword';
import Mobilenav from './components/Mobilenav';
import Profile from './components/screens/Profile';

export const UserContext = createContext()
 
const Routing =()=>{
  const history = useHistory()
  const location = useLocation();
  const {state,dispatch} = useContext(UserContext)
  useEffect(()=>{
    // const user = JSON.parse(localStorage.getItem("user"))
    const userinls = localStorage.getItem("user")
    if(userinls!=="undefined")
    {
      var user = JSON.parse(localStorage.getItem("user"))
    }
    if(user){
      dispatch({type:"USER",payload:user})
            
    }
    else{
      history.push(location.pathname)
    }
  },[])
  return(
    <Switch>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route  path="/signin">
      <Signin/>
      </Route>
      <Route path="/subscribe">
        <Subscribe/>
      </Route>
      <Route exact path="/editions">
        <Editions/>
      </Route>
      <Route exact path="/post">
        <Post/>
      </Route>
      <Route path="/post/postEditions">
        <PostEditions/>
      </Route>
      <Route path="/post/postSlides">
        <PostSlides/>
      </Route>
      <Route path="/post/mobileSlides">
        <PostMobileSlides/>
      </Route>
      <Route exact path="/users">
        <Users/>
      </Route>
      <Route exact path="/users">
        <Users/>
      </Route>
      <Route exact path="/pop2">
        <SigninPopUpTimeDelay/>
      </Route>
      <Route  path="/flipbook">
        
        <Flipbook />

      </Route>
      <Route  path="/mobilebook">
        
        <SingleBook />

      </Route>
      <Route  path="/profile">
        <Profile/>
      </Route>
      <Route  path="/loading">
        <Loading/>
      </Route>
      <Route  path="/aboutus">
        <Aboutus/>
      </Route>
      <Route  path="/nfc">
        <Contributors/>
      </Route>
      <Route path="/update-password">
        <Newpassword/>
      </Route>
      <Route  path="/editions/4-edition">
      <Editionfb4/>
      </Route>
      <Route  path="/editions/5-edition">
      <Editionfb5/>
      </Route>
      <Route  path="/editions/6-edition">
      <Editionfb6/>
      </Route>
      <Route  path="/editions/7-edition">
      <Editionfb7/>
      </Route>
      <Route  path="/editions/8-edition">
      <Editionfb8/>
      </Route>
      <Route  path="/editions/9-edition">
        <Editionfb9/>
      </Route>
      <Route  path="/editions/4edition">
      <Editione4/>
      </Route>
      <Route  path="/editions/5edition">
      <Editione5/>
      </Route>
      <Route  path="/editions/6edition">
      <Editione6/>
      </Route>
      <Route  path="/editions/7edition">
      <Editione7/>
      </Route>
      <Route  path="/editions/8edition">
      <Editione8/>
      </Route>
      <Route  path="/editions/9edition">
        <Editione9/>
      </Route>
    </Switch>
  )
}

function App() {
  
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <div className="App">
     
      {/* <Navbar/> */}
      <Appbar />
      <Mobilenav/>
      {/* <Mobilemenu/> */}
      <Background/>
      <div id="app-inner">
        <Routing/>
        </div>
    </div>
    </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
