import Nav from './components/Nav'
import AboutMe from './containers/AboutMe'
import Contact from './containers/Contact'
import MyJobs from './containers/MyJobs'
import Home from './containers/Home'
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <HashRouter>
        <Nav />
        <Contact />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/mi-jobs" element={<MyJobs />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
