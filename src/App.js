import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import Navbar from "./components/navbar/Navbar"
import Home from "./router/home/Home"
import Cart from './router/cart/Cart'
import Like from './router/like/Like'
import Taq from './router/taq/Taq'
import Footer from './components/footer/Footer';
import SingleRoute from './router/single-route/SingleRoute';
import Admin from './router/admin/Admin';
import { useSelector } from 'react-redux';


function App() {
  const auth = useSelector(s=> s.auth)
  return (
    <div className="App">
      <Sidebar/>
      {/* <Navbar/> */}
      <Routes>

        <Route path='/' element={<Home/>}/>
        {
          auth ? <Route path='/' element={<Navigate replace to={"/admin"} />}/>
          :
          <Route path='/admin' element={<Navigate replace to={"/"} />}/>
        }
        <Route path='/admin/*' element={<Admin/>}/>
        <Route path='/product/:id' element={<SingleRoute/>}/>
      </Routes>


      

       <Footer/> 
    </div>
  );
}

export default App;
