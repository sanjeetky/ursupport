import React, { Component } from 'react';
import Insert from './insert.js';
import MorningVegetable from './morningvegetable.js';
import MorningFruit from './morningfruit.js';
import MorningMilk from './morningmilk.js';
import MorningMandi from './morningmandi.js';


import EveningVegetable from './eveningvegetable.js';
import EveningFruit from './eveningfruit.js';
import EveningMilk from './eveningmilk.js';
import EveningMandi from './eveningmandi.js';




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
        
          const eveningVegPage = () => {
            return(
                <EveningVegetable  />
            );
          };
          const morningVegPage = () => {
            return(
                <MorningVegetable  />
            );
          };


          const morningMilkPage = () => {
            return(
                <MorningMilk  />
            );
          };
          const  eveningMilkPage = () => {
            return(
                <EveningMilk  />
            );
          };


          const morningFruitPage = () => {
            return(
                <MorningFruit />
            );
          };
          const eveningFruitPage = () => {
            return(
                <EveningFruit />
            );
          };


         
          const morningMandiPage = () => {
            return(
                <MorningMandi />
            );
          };
          const eveningMandiPage = () => {
            return(
                <EveningMandi />
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

                   <Route exact path='/morningvegetable' component={morningVegPage} />
                   <Route exact path='/eveningvegetable' component={eveningVegPage} />

                   <Route exact path='/morningmilkproduct' component={morningMilkPage} />
                   <Route exact path='/eveningmilkproduct' component={eveningMilkPage} />


                   <Route exact path='/morningmandi' component={morningMandiPage} />
                   <Route exact path='/eveningmandi' component={eveningMandiPage} />

                   <Route exact path='/morningfruit' component={morningFruitPage} />
                   <Route exact path='/eveningfruit' component={eveningFruitPage} />

                 
                   <Route exact path='/delivery' component={DeliveryPage} />

                   <Redirect to="/insert" />
                   </Switch>
            </div>
  
        )
}
}
export default Main;