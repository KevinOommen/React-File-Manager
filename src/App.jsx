import './App.css'
import {Login, Register, HomePage,Dashboard} from './pages'
import {Routes, Route} from 'react-router-dom'

const App= () => {

  return (
  
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
      
    </div>

  )
}

export default App;
