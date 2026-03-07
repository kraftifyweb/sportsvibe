import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Head from './comp/Head/Head';
import Foot from './comp/Foot/Foot';
import Navi from './comp/Nav/Navi';
import Home from './comp/Home/Home';
import News from './comp/News/News';
import Events from './comp/Events/Events';
import Cont from './comp/Cont/Cont';
import Cric from './comp/cricket/Cric';
import Football from './comp/football/Football';
import Article from './comp/articles/Article';

function App() {
  return (
    <div className="App">
      <Head />
      <BrowserRouter>
      <Navi />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path='/cricket' element={<Cric />} />
        <Route path='/football' element={<Football />} />
        <Route path='/article' element={<Article />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Cont />} />
      </Routes>
      </BrowserRouter>
      <Foot />
    </div>
  );
}

export default App;
