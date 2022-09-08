import './scss/app.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import MenuCabecera from './components/menuCabecera/MenuCabecera';
import Content from './components/body-index/Content';
import QuienesSomos from './components/quienes-somos/QuienesSomos';
import Biografia from './components/liliana-bodoc/biografia/Biografia';
import ContenedorListaDeLibros from './components/liliana-bodoc/obras/contenedor-lista-de-libros/ContenedorListaDeLibros';
import DiaDeJulio from './components/liliana-bodoc/21-de-julio/DiaDeJulio';
import Videos from './components/liliana-bodoc/videos/Videos';
import QueHacemos from './components/que-hacemos/QueHacemos';
import MujeresConfines from './components/que-hacemos/mujeres-de-los-confines/MujeresConfines';
import JulioActividad from './components/que-hacemos/21-de-julio/JulioActividad';
import ContarParaQueOcurra from './components/que-hacemos/contar-para-que-ocurra/ContarParaQueOcurra';
import Footer from './components/footer/Footer';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Scroll from './components/animations/scroll/Scroll';
function App() {

  return (
    <HashRouter >
      <MenuCabecera />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/liliana-bodoc/biografia" element={<Biografia />} />
        <Route path="/liliana-bodoc/obras" element={<ContenedorListaDeLibros />} />
        <Route path="/liliana-bodoc/21-de-julio" element={<DiaDeJulio />} />
        <Route path="/liliana-bodoc/videos" element={<Videos />} />
        <Route path="/que-hacemos" element={<QueHacemos />} />
        <Route path="/que-hacemos/mujeres-de-los-confines" element={<MujeresConfines />} />
        <Route path="/que-hacemos/julio-actividad" element={<JulioActividad />} />
        <Route path="/que-hacemos/contar-para-que-ocurra" element={<ContarParaQueOcurra />} />
        <Route path="*" element={<h1>Nada por aca</h1>} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
