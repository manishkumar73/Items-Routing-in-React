import React from 'react';
import About from './About';
import Shop  from './Shop';
import Nav from './Nav'; 
import {BrowserRouter as Router, Route} from 'react-router-dom';
import ItemDetail from './ItemDetail';

function App(){
  return(
    <Router>
      <div className="App">
        <Nav />
        <switch>
       
        <Route path="/" exact component={home}/>
        <Route path="/about"  component={About}  />
        <Route path="/shop" exact component={Shop} />
        <Route  path="/shop/:id" component={ItemDetail}  />
        </switch>
      </div>
    </Router>
  );
}

const home = () =>{
  return(
    <div>
      <h1>Home page</h1>
    </div>
    
  )
}

export default App;