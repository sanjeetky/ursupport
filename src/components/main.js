import React, { Component } from 'react';
import Insert from './insert.js';
import Vegetable from './vegetable.js';
import Fruit from './fruit.js';
import Milk from './milk.js';
import Mandi from './mandi.js';
import Orders from './orders.js';
import Manage from './manage.js';
import Onion from './onion.js';
import Potato from './potato.js';
import Dayreport from './dayreport';
import Deliveryman from './deliveryman.js';
import {baseUrl} from '../baseUrl';
import User from './user';

import RestroVegetable from './restrovegetable.js';
import RestroFruit from './restrofruit.js';
import RestroMilk from './restromilk.js';
import RestroMandi from './restromandi.js';
import RestroOnion from './restroonion.js';
import RestroPotato from './restropotato.js';


import Restro from './restaurant';

import Delivery from './delivery.js';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

    constructor(props){
        super();
        this.state={
          delivery:[]
        }
    }
componentDidMount()
{
  fetch( baseUrl+'/delivery/display')
  .then(res=>res.json())
  .then(data=>{
      this.setState({delivery:data})
  })
  .catch(err=>console.log(err))
}
      
    render() {
        const InsertPage = () => {
            return(
                <Insert  />
            );
          };
        
          const DeliverymanPage = () => {
            return(
                <Deliveryman  />
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
        

        
          const PotatoPage = () => {
            return(
                <Potato />
            );
          };
          const OnionPage = () => {
            return(
                <Onion />
            );
          };




          
          const RestroVegPage = () => {
            return(
                <RestroVegetable  />
            );
          };

         
         
          const  RestroMilkPage = () => {
            return(
                <RestroMilk  />
            );
          };


          const RestroFruitPage = () => {
            return(
                <RestroFruit />
            );
          };
         


         
          const RestroMandiPage = () => {
            return(
                <RestroMandi />
            );
          };
        

        
          const RestroPotatoPage = () => {
            return(
                <RestroPotato />
            );
          };
          const RestroOnionPage = () => {
            return(
                <RestroOnion />
            );
          };
          const DeliveryPage = () => {
            return(
                <Delivery  />
            );
          };

          const ManagementPage = () => {
            return(
                <Manage  />
            );
          };

          const DayreportPage = () => {
            return(
                <Dayreport />
            );
          };


          const OrdersPage = () => {
            return(
                <Orders />
            );
          };


          const UserPage = () => {
            return(
                <User/>
            );
          };

          const RestroPage = () => {
            return(
                <Restro/>
            );
          };
          
        return (
            <div>
                 <Switch>
                 <Route exact path='/hellouser' component={UserPage} />
                   <Route exact path='/notthistimeinsert' component={InsertPage} />
                   <Route exact path='/notthistimevegetable' component={VegPage} />
                   <Route exact path='/notthistimemilkproduct' component={MilkPage} />
                   <Route exact path='/notthistimemandi' component={MandiPage} />
                   <Route exact path='/notthistimefruit' component={FruitPage} />
                   <Route exact path='/notthistimeorders' component={OrdersPage} />
                   <Route exact path='/notthistimepotato' component={PotatoPage} />
                   <Route exact path='/notthistimeonion' component={OnionPage} />


                   <Route exact path='/notthistimerestrovegetable' component={RestroVegPage} />
                   <Route exact path='/notthistimerestromilkproduct' component={RestroMilkPage} />
                   <Route exact path='/notthistimerestromandi' component={RestroMandiPage} />
                   <Route exact path='/notthistimerestrofruit' component={RestroFruitPage} />
                   <Route exact path='/notthistimerestropotato' component={RestroPotatoPage} />
                   <Route exact path='/notthistimerestroonion' component={RestroOnionPage} />

                   <Route exact path='/notthistimedayreport' component={DayreportPage} />

                   <Route exact path='/notthistimerestro' component={RestroPage} />


                   <Route exact path='/deliveryman' component={DeliverymanPage} />
                   <Route exact path='/notthistimedelivery' component={DeliveryPage} />
                   <Route exact path='/notthistimemanagement' component={ManagementPage} />
                   

                   <Redirect to="/hellouser" />
                   </Switch>
            </div>
  
        )
}
}
export default Main;