import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import Benefits from './screens/Benefits';
import HowWeWork from './screens/HowWeWork';
import Contact from './screens/Contact';
import Services from './screens/Services';
import NavBar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <Benefits/>
      <HowWeWork/>
      <Contact/>
      <Services/>           
      
    </div>
  );
}

export default App;
