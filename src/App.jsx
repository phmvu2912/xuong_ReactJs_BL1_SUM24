import { useEffect, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import LayoutClient from './components/layouts/LayoutClient'
import HomePage from './pages/client/HomePage'
import Products from './pages/client/shop/Products'
import DetailProduct from './pages/client/shop/DetailProduct'
import AboutPage from './pages/client/AboutPage'
import ContactPage from './pages/client/ContactPage'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import NotFound from './pages/NotFound'
import instance from './services/axios'


function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await instance.get(`products`)
      setProducts(data)
    })()
  }, [])

  return (
    <>
      <Routes>
        {/* Layout Client */}
        <Route path='/' element={<LayoutClient />} >
          <Route index element={<HomePage />} />
          <Route path='products' element={<Products products={products} /> } />
          <Route path='products/:id' element={<DetailProduct />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Route>

        {/* Auth */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />

        {/* Not Found */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
