
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'



import { useState } from 'react';


// Import Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer'

// Screens import
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {
const [sideToggle, setSideToggle] = useState(false)

  return (

    <Router>
      <Navbar click={()=> setSideToggle(true)}/>
      
      <SideDrawer show={ sideToggle} click={()=>setSideToggle(false) }/>

      <Backdrop show={sideToggle} click={()=>setSideToggle(false) }/>
      
    
      
      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen */}
      <main>
        {/* for the cart */}
        
        <Routes>
          <Route  path="/" element={<HomeScreen/>} />
          <Route  path="/product/:id" element={<ProductScreen/>} />
          <Route  path="/cart" element={<CartScreen/>}/>
        </Routes>
      </main>
 
      </Router>
  );
}

export default App;
