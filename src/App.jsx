import './App.css'
import HomePage from './pages/HomePage/HomePage'
import Login from './pages/LoginPage/Login'
//import Register from './pages/Register/Register'
import {Routes, Route} from 'react-router-dom'

const App= () => {

  return (
  
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      
    </div>

  )
}

export default App;
