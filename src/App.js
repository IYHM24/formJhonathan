/* Frameworks */
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Button } from './components/Button';
/* Components */
import { Footer } from "./components/Footer";
import { MobileForm } from "./components/Form/MobileForm";
import { PCForm } from "./components/Form/PCForm";
import { Modal } from './components/Modal';
/* import { Header } from "./components/Header"; */
import './css/Style2.css'

function App() {
  alert("Bienvenido, este formulario tiene finalidad de informar al agente comercial para realizar el respectivo agendamiento para tu equipo o servicio que estas interesado")
  return (
    <>
      <PCForm />
      <MobileForm />
      <Button/>
      <Modal />
      <Footer />
    </>
  );
}

export default App;
