import logo from './sportsvibe.png';
import './App.css';
import Head from './comp/Head/Head';
import Foot from './comp/Foot/Foot';

function App() {
  return (
    <div className="App">
      <Head />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="50px"/>
        hi
      </header>
      <Foot />
    </div>
  );
}

export default App;
