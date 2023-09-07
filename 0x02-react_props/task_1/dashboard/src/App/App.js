import './App.css';
import logo from '../assets/holberton_logo.jpg';
import { getFooterCopy, getFullYear } from '../utils/utils';
import Notifications from '../Notifications';
import Login from '../../Login';
import Footer from '../../Footer';
import Header from '../../Header';

function App() {
  return (
    <>
      <Notifications />
      
      <div className="App">
        <Header />
      </div>

      <Login />
      <Footer />
    </>
  );
}

export default App;