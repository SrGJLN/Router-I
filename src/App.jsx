import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navigator from './components/Navigator';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

function App() {
  

  return (
    <>
      <Navigator />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;