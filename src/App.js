import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Blogs from './components/pages/Blogs';
import Card1 from './components/pages/Card1';
import Card2 from './components/pages/Card2';
import Card3 from './components/pages/Card3';
import Card4 from './components/pages/Card4';
import About from './components/pages/About';
import Cards from './components/Cards';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/card/1' component={Card1} />
        <Route path='/card/2' component={Card2} />
        <Route path='/card/3' component={Card3} />
        <Route path='/card/4' component={Card4} />
        <Route path='/about' component={About} />

     
        
      </Switch>
    </Router>
  );
}

export default App;

