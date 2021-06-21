import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// global components
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
// dynamic components
import Home from './pages/Cover';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        <Header />
        <div>
          <Route exact path="/">
            <Home />
          </Route>
          <Navigation />
          <Switch>
            <Route path='/about-me'>
              <About />
            </Route>
            <Route path='/work'>
              <Work />
            </Route>
            <Route path='/contact-me'>
              <Contact />
            </Route>
            {/* redirecting to an external site */}
            <Route exact path='/resume' render={() => (window.location = 'https://docs.google.com/document/d/1DbzzKpfFp9nms37w8c6PoG5Ya0vPHIdJk4PkH1aruIs/edit?usp=sharing')} />
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
