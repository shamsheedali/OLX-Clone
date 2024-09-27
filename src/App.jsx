import React, { useEffect } from 'react'
import Homepage from './Pages/Homepage/Homepage'
import { Route, Routes, useNavigate } from 'react-router-dom'
import ProductPage from './Pages/ProductPage/ProductPage'
import SignUp from './Pages/SignUp/SignUp'
import LogIn from './Pages/LogIn/LogIn'
import AddProductPage from './Pages/AddProductPage/AddProductPage'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase/firebase'
import ContextProvider from './context/ContextProvider'

const App = () => {

  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async(user) => {
      if(user) {
        navigate('/');
        console.log("Logged In");
      }else {
        navigate('/login');
        console.log("Logged out");
      }
    })
  }, [])

  return (
    <ContextProvider>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/addproduct' element={<AddProductPage />} />
      </Routes>
    </ContextProvider>
  )
}

export default App
