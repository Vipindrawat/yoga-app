import React, { useContext, useState } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer'
import Details from './components/Details';
import allcontext from '../context/Allcontext';
import Yoga from './components/Yoga';

const App = () => {



  const data = useContext(allcontext);
  const { progress } = data;

  return (
    <div >
      <Navbar />
      <LoadingBar
        color='green'
        progress={progress}
        height={3}
        background="white"
      />
      <Routes>
        <Route exact path="/" element={<Yoga />} />
        <Route exact path="/details" element={<Details />} />

      </Routes>
      <Footer />

    </div>

  )

}

export default App;
