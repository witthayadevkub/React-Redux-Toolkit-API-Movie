// import { useState } from 'react'
import { BrowserRouter  as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/Store'
import './App.css'

//components
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Read from './components/ReadMoreMovie/Read'
import About from './About'


function App() {


  return (
    <div>
          <Provider store={store}>
              <Router>
                <Header/>
                <div className="container">
                  <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/movie/:id" element={<Read/>} />
                    <Route path="/about/" element={<About/>} />
                  </Routes>
                </div>
              </Router>
          </Provider>
    </div>
  )
}

export default App
