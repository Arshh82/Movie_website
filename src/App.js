import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router';
import Home from './components/Homepage/Home';
import Testt from './components/testt';

const App = (val) => {
   return(
       <>
           <Navbar />
               <Routes>
                   <Route path='/' element={<Home />}></Route>
                   <Route path='/test' element={<Testt/>}></Route>
               </Routes>
           <Footer />
       </>


); 
}

export default App
