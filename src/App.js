import logo from './sportsvibe.png';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Head from './comp/Head/Head';
import Foot from './comp/Foot/Foot';
import Navi from './comp/Nav/Navi';
//import Nav from './comp/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Head />
      <BrowserRouter>
      <Navi />
      
      <Routes>
        <Route path="/" elements={<h1>Homepahge</h1>} />
        <Route path="/news" elements={<h1>News</h1>} />
        <Route path="/events" elements={<h1>Events</h1>} />
        <Route path="/contact" elements={<h1>Contact US</h1>} />
      </Routes>
      </BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="50px"/>
        hi
        how are you
      </header>
      <Foot />
    </div>
  );
}

export default App;
