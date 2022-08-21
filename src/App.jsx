import './scss/app.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import MenuCabecera from './components/menuCabecera/MenuCabecera';
import Content from './components/body-index/Content';
import QuienesSomos from './components/quienes-somos/QuienesSomos';
import LilianaBodoc from './components/liliana-bodoc/Liliana';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <MenuCabecera />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/liliana-bodoc" element={<LilianaBodoc />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
