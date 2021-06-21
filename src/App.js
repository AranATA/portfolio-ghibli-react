import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// global components
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// dynamic components
import Home from './pages/Cover';
import About from './pages/About';
import Works from './pages/Works';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Header />
    {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        <Navigation />
        <Switch>
          <Route path ='/home'>
            <Home />
          </Route>
          <Route path ='/about'>
            <About />
          </Route>
          <Route path ='/works'>
            <Works />
          </Route>
          <Route path ='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div> 
  );
}

export default App;






// FOR FUTURE USE / OR DELETE

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
