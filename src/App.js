
import './App.css';
import Navbar from './components/layout/navbar/Navbar';
import Mains from './components/layout/main/Mains';
import Footer from './components/layout/footer/Footer';

function App() {
  return (

   <div>
    <Navbar className="navbar"/>
    <Mains/>
    <Footer/>
   </div>

  );
}

export default App;
