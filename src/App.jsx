import './App.css'
import React from 'react'
import { useDispatch } from 'react-redux'
import {Login, Register, HomePage,Dashboard} from './pages'
import {Routes, Route} from 'react-router-dom'
import { checkIsLoggedIn } from './redux/actionCreators/authActionCreators'

const App= () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(checkIsLoggedIn)
  },[])
  return (
  
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<HomePage />} />

        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      
    </div>

  )
}

export default App;
