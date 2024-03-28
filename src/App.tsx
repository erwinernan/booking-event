import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './components/Layout';
import AboutPage from './pages/About';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Home />
      {/* <AboutPage /> */}
    </div>
    // <h1 className="text-3xl font-bold underline text-center">Hello world!</h1> 
    // <Layout>
    //   <Header />
    //   <div>This is the content of my page.</div>
    //   <Footer />
    // </Layout>
  )
}

export default App
