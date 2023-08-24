import holbertonLogo from './holberton-logo.jpg';
import './App.css';
import {getFooterCopy,getFullYear} from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={holbertonLogo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
        <p>
        Login to access the full dashboard
        </p>
      </div>

      <div className="App-footer">
        <p>
        Copyright {getFullYear()} - {getFooterCopy()}
        </p>
      </div>
    </div>
  );
}

export default App;
