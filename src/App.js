import './App.css';
import EjemploNav from './components/EjemploNav';
import EjemploCarrousel from './components/EjemploCarrousel'
import ContainerCards from './components/ContainerCards'

function App() {
  return (
    <div className="App">
      <EjemploNav />
      <EjemploCarrousel />
      <ContainerCards />
    </div>
  );
}

export default App;
