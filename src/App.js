import React from 'react';


import { Switch, Route } from "react-router-dom";


import Home from './Components/Home/home';
import About from './Components/About/about';
import OurService from './Components/OurService/service';
import ContectUs from './Components/Contact/contact';
import NotFound from './Components/NotFound/notfound';


const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />;
    <Route path='/about' component={About} />;
    <Route path='/ourservice' component={OurService} />;
    <Route path='/contectUs' component={ContectUs} /> ;
    <Route component={NotFound} />
  </Switch>
)


export default App;
