import {Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from '../Layout/Layout'
import Home from '../../pages/Home/Home'
import NotFound from '../../pages/NotFound/NotFound'
import Services from '../../pages/Services/Services'
import Technologies from '../../pages/Technologies/Technologies'
import Products from '../../pages/Products/Products'
import Portfolio from '../../pages/Portfolio/Portfolio'
import Blog from '../../pages/Blog/Blog'
import AboutUs from '../../pages/AboutUs/AboutUs'

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path='*' element={<NotFound/>} />
          <Route path='services' element={<Services/>} />
          <Route path='technologies' element={<Technologies/>} />
          <Route path='products' element={<Products/>} />
          <Route path='portfolio' element={<Portfolio/>} />
          <Route path='blog' element={<Blog/>} />
          <Route path='about' element={<AboutUs/>} />
        </Route>
      </Routes>
      <Home/>
    </div>
  );
}

export default App;
