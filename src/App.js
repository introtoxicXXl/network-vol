import './App.css';
import Navigation from './components/Navigation/Navigation'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Donation from './components/Donation/Donation';
import Events from './components/Events/Events';
import Blogs from './components/Blogs/Blogs';
import Register from './components/Register/Register';
import Admin from './components/Admin/Admin';
import SignIn from './components/SignIn/SignIn';


function App() {
  return (
    <div>
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/donation' element={<Donation></Donation>}></Route>
        <Route path='/event' element={<Events></Events>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/admin' element={<Admin></Admin>}></Route>
        <Route path='signin'element={<SignIn></SignIn>}></Route>
      </Routes>
    </div>
  );
}

export default App;
