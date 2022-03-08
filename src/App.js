import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages';
import Nav from './pages/Nav';

function App() {

  console.clear()

  return (
    <>
    <Nav />
    <Route exact path="/" component={Home} />
    </>
  );
}

export default App;
