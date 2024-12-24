import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="px-8 py-2">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/product/:id" element={<Product/>}/> */}
          <Route path="/cart" element={<Cart/>}/>
          {/* <Route path="/checkout" element={<Checkout />} /> */}
          <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
