import React, { useState } from 'react';

// App uses the same header and footer for all pages, only the body of your pages re-render while the header and footer remain intact.

import Navigation from './Navigation' 
// dynamic components
import Home from './pages/Cover';
import About from './pages/About';
import Works from './pages/Work';
import Contact from './pages/Contact';

export default function PortfolioBody() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Works') {
      return <Works />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
