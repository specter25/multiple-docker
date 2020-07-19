import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route , Link} from 'react-router-dom'
import OtherPage from './otherpage'
import Fib from './fib'


function App() {
  return (
   <Router>
      <div className="App">
      <header className="App-header">
      <div>
          <Route exact path ="/" component={Fib} />
          <Route exact path ="/otherpage" component={OtherPage} />
        </div>

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Link to="/">Home</Link>
        <Link to= "otherpage">Other Page</Link>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

    </div>
   </Router>
  );
}

export default App;
