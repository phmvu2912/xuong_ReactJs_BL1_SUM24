import { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import LayoutAdmin from './components/layouts/LayoutAdmin'
import LayoutClient from './components/layouts/LayoutClient'
import NotFound from './pages/NotFound'
import Dashboard from './pages/admin/Dashboard'
import ProductForm from './pages/admin/products/ProductForm'
import ProductsAdminPage from './pages/admin/products/ProductsAdminPage'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import AboutPage from './pages/client/AboutPage'
import ContactPage from './pages/client/ContactPage'
import HomePage from './pages/client/HomePage'
import DetailProduct from './pages/client/shop/DetailProduct'
import Products from './pages/client/shop/Products'
import instance, { getProduct } from './services/axios'
import PrivateRoute from './components/PrivateRoute'


function App() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            try {
                const { data } = await instance.get(`products`)
                setProducts(data)
            } catch (error) {
                console.log(error)
            }
        })()
    }, [])


    // Remove a record
    const handleRemove = async (id) => {
        // console.log(id)
        try {
            const isConfirm = window.confirm('Bạn có thực sự muốn xóa bản ghi này không?');

            if (isConfirm) {
                try {
                    await instance.delete(`products/${id}`);
                    alert('Xóa thành công!');

                    const newData = products.filter(product => product.id !== id)
                    setProducts(newData)
                } catch (error) {
                    console.log(error)
                }
            }

        } catch (error) {
            console.log(error)
        }
    }


    // Update + Create
    const handleSubmit = async (product) => {
        try {

            // console.log(product.id)
            if (product.id) {

                await instance.patch(`products/${product.id}`, product);

                const newData = await getProduct();

                setProducts(newData)

                navigate('/admin/products')

                alert('Cập nhật thành công!');

            } else {

                const res = await instance.post(`products`, product);

                console.log(res)

                setProducts([...products, res.data])

                navigate('/admin/products')

                alert('Thêm mới bản ghi thành công!');
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Routes>
                {/* Layout Client */}
                <Route path='/' element={<LayoutClient />} >
                    <Route index element={<HomePage />} />
                    <Route path='products' element={<Products products={products} />} />
                    <Route path='products/:id' element={<DetailProduct />} />
                    <Route path='about' element={<AboutPage />} />
                    <Route path='contact' element={<ContactPage />} />
                </Route>

                {/* Layout Admin */}
                <Route path='admin' element={<PrivateRoute />} >
                    <Route element={<LayoutAdmin />} />
                    <Route index element={<Dashboard products={products} />} />
                    <Route path='products' element={<ProductsAdminPage products={products} onRemove={handleRemove} />} />
                    <Route path='products-submit' element={<ProductForm onHandIn={handleSubmit} />} />
                    <Route path='products-submit/edit/:id' element={<ProductForm onHandIn={handleSubmit} />} />
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
