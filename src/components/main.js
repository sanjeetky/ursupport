import React, { Component } from 'react';
import Insert from './insert.js';
import Vegetable from './vegetable.js';
import Milk from './milk.js';
import Grocery from './grocery.js';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props){
        super();
    }

      
    render() {
        const InsertPage = () => {
            return(
                <Insert  />
            );
          };
        
          const VegPage = () => {
            return(
                <Vegetable  />
            );
          };
          const MilkPage = () => {
            return(
                <Milk  />
            );
          };
          const GroceryPage = () => {
            return(
                <Grocery />
            );
          };
          
          
        return (
         
       
            <div>
                 <Switch>
                   <Route exact path='/insert' component={InsertPage} />
                   <Route exact path='/vegetable' component={VegPage} />
                   <Route exact path='/milkproduct' component={MilkPage} />
                   <Route exact path='/grocery' component={GroceryPage} />

                   <Redirect to="/insert" />
                   </Switch>
            </div>
  
        )
}
}
export default Main;