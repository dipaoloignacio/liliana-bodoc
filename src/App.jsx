import './scss/app.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import MenuCabecera from './components/header/menuCabecera/MenuCabecera';
import Header from './components/header/Header';
import Content from './components/body/Content';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter>
      <MenuCabecera />
      <Header />
      <Routes>
        <Route path="/" element={<Content/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
