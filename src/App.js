import './scss/app.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './components/header/Header';
import Content from './components/body/Content';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Header/>
    <Content/>
    <Footer/>
    </>
  );
}

export default App;
