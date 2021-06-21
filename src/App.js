import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// global components
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// dynamic components
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Resume from './components/pages/Resume';
import Contact from './components/pages/Contact';

function App() {
  return (
    <div>
      {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        <Header />
        <Navigation />
        <div>          
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about-me'>
              <About />
            </Route>
            <Route path='/work'>
              <Work />
            </Route>
            <Route path='/contact-me'>
              <Contact />
            </Route>
            <Route path='/resume'>
              <Resume />
            </Route>
            
          </Switch>
        </div>
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
