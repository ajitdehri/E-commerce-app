
import './App.css'
import Products from './components/Products'
import Cart from './components/Cart'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
     <Footer/>
    </>
  )
}

export default App
