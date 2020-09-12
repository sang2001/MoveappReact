import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router,Route,Switch,NavLink} from 'react-router-dom';
import MovieList from './MovieComponent/MovieList';
import MovieDetails from './MovieComponent/MovieDetails';
import MaterialTable from "material-table";
class App extends Component {
 render()
 { 
  return (
    <div className="App">
            
        <React.Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Switch>
            <Route exact path="/" component={MovieList} />
            <Route exact path="/MovieDetails" component={MovieDetails} />
            </Switch>
            </Router>

          </React.Suspense>
       
     
    </div>
  );
  }
}
  export default App;
