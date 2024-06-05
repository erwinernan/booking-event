import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Wedding from './pages/Wedding';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// // import './App.css'
// import React from 'react';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Layout from './components/Layout/FullLayout';
// import AboutPage from './pages/About';
// import Home from './pages/Home';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <Home />
//       {/* <AboutPage /> */}
//     </div>
//     // <h1 className="text-3xl font-bold underline text-center">Hello world!</h1> 
//     // <Layout>
//     //   <Header />
//     //   <div>This is the content of my page.</div>
//     //   <Footer />
//     // </Layout>
//   )
// }

// export default App
