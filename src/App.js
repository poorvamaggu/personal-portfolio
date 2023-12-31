import logo from './assets/images/logo.p1.png';
import './App.css';
import { NavBar } from  "./components/NavBar";
import { Banner } from  "./components/Banner";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from  "./components/Skills";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
