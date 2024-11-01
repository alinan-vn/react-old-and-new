import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/global/navbar';
import Footer from './components/global/footer';
import Home from './components/home';
import About from './components/about';
import Dashboard from './components/dashboard';
import NoMatch from './components/404';

import { Routes, Route, Outlet, Link } from "react-router-dom";


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        <Routes>
          <Route path="/">
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="dashboard" element={<Dashboard />} />
            
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
        
        <Footer />

      </header>
    </div>
  );
}