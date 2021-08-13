import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className=" text-red-600">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link text-red-600"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary">Primary</Button>
      </header>
      
    </div>
  );
}

export default App;
