import React, { Component } from 'react';
import Insert from './insert.js';
import Vegetable from './vegetable.js';
import Milk from './milk.js';
import Fruit from './fruit.js';
import Dryfruit from './dryfruit.js';
import Special from './special.js';
import Delivery from './delivery.js';
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
          const FruitPage = () => {
            return(
                <Fruit />
            );
          };
          const DryfruitPage = () => {
            return(
                <Dryfruit />
            );
          };
          const SpecialPage = () => {
            return(
                <Special />
            );
          };
          const DeliveryPage = () => {
            return(
                <Delivery  />
            );
          };
          
        return (
         
       
            <div>
                 <Switch>
                   <Route exact path='/insert' component={InsertPage} />
                   <Route exact path='/vegetable' component={VegPage} />
                   <Route exact path='/milkproduct' component={MilkPage} />
                   <Route exact path='/special' component={SpecialPage} />
                   <Route exact path='/fruit' component={FruitPage} />
                   <Route exact path='/dryfruit' component={DryfruitPage} />
                   <Route exact path='/delivery' component={DeliveryPage} />

                   <Redirect to="/insert" />
                   </Switch>
            </div>
  
        )
}
}
export default Main;