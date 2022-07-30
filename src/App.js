import React from 'react'
import {Routes, Route} from 'react-router-dom'
import About from './components/About';
import Blog from './components/Blogs';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './shared/Navbar';
import NotFound from './shared/NotFound';
import RequireAuth from './shared/RequireAuth';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/about' element={
          <RequireAuth>
            <About></About>
          </RequireAuth>
        } />
        <Route path='/blog' element={<Blog></Blog>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
    </>
  );
}

export default App;
