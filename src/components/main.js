import React, { Component } from 'react';
import Insert from './insert.js';
import Vegetable from './vegetable.js';
import Fruit from './fruit.js';
import Milk from './milk.js';
import Mandi from './mandi.js';
import Orders from './orders.js';





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


         
          const  MilkPage = () => {
            return(
                <Milk  />
            );
          };


          const FruitPage = () => {
            return(
                <Fruit />
            );
          };
         


         
          const MandiPage = () => {
            return(
                <Mandi />
            );
          };
        

          const DeliveryPage = () => {
            return(
                <Delivery  />
            );
          };

          const OrdersPage = () => {
            return(
                <Orders />
            );
          };
          
        return (
         
       
            <div>
                 <Switch>
                   <Route exact path='/insert' component={InsertPage} />
                   <Route exact path='/vegetable' component={VegPage} />
                   <Route exact path='/milkproduct' component={MilkPage} />
                   <Route exact path='/mandi' component={MandiPage} />
                   <Route exact path='/fruit' component={FruitPage} />
                   <Route exact path='/orders' component={OrdersPage} />
                 
                   <Route exact path='/delivery' component={DeliveryPage} />

                   <Redirect to="/insert" />
                   </Switch>
            </div>
  
        )
}
}
export default Main;