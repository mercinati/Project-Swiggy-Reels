import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path='/user/register' element={<UserRegister />} />
        {/* <Route path='/user/login' element={<UserLogin />} />
        <Route path='/foodpartner/register' element={<FoodPartnerRegister />} />
        <Route path='/foodpartner/login' element={<FoodPartnerLogin />} /> */}
      </Routes>
    </Router>
  )
}

export default AppRoutes