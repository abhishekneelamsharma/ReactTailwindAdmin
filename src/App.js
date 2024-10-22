import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Calender from './pages/Calender'
import Tables from './pages/Tables'
import Forms from './pages/Forms'


const App = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }


  return (
    <>
      <Router>
        <Header handleToggle={handleToggle} />
        <Sidebar toggle={toggle} handleMainToggle={handleToggle}/>
        <div className='ml-0 lg:ml-64 px-8 bg-gray-100 py-8'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path="/calender" element={<Calender />} />
            <Route path='/tables' element={<Tables />} />
            <Route path='/forms' element={<Forms />} />
          </Routes>
        </div>
      </Router>
    </>

  )
}

export default App