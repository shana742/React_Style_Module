import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Componets/Header-Part/Header';
  import Footer from './Componets/Footer-Part/Footer'
import {BrowserRouter , Routes, Route} from 'react-router-dom';
// import Home from './Pages/Home/Hom.js';
import About from './Pages/About/index';


function App() {
  
  return (
   <>
   <BrowserRouter>
        <Header  />
          <Routes>
             {/* <Route exact={true} path="/" element={<Home />} /> */}
          <Route  path="/about" element={<About />} />
          </Routes>
    </BrowserRouter>
      <Footer/>  
      
   </>
  );
}

export default App;
