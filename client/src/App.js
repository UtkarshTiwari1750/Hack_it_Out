import { Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      
      <Navbar />
      
      <Routes>
        <Route path='/' element={<Home />}/>


      </Routes>

    </div>
  );
}

export default App;
