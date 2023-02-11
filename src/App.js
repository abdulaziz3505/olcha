import './App.css';
import { Routes, Route } from 'react-router-dom';
import SubHeader from "./components/sub-header/SubHeader"
import Navbar from "./components/navbar/Navbar"
import Home from "./router/home/Home"
import Cart from './router/cart/Cart'
import Like from './router/like/Like'
import Taq from './router/taq/Taq'
import Footer from './components/footer/Footer';
import SingleRoute from './router/single-route/SingleRoute';

function App() {
  return (
    <div className="App">
      <SubHeader/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/like' element={<Like/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/taq' element={<Taq/>}></Route>
        <Route path='/product/:id' element={<SingleRoute/>}></Route>
      </Routes>

      

       <Footer/> 
    </div>
  );
}

export default App;
