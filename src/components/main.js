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
import {baseUrl} from '../baseUrl';
import User from './user';



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

          const ManagementPage = () => {
            return(
                <Manage  />
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
          
        return (
            <div>
                 <Switch>
                 <Route exact path='/user' component={UserPage} />
                   <Route exact path='/notthistimeinsert' component={InsertPage} />
                   <Route exact path='/notthistimevegetable' component={VegPage} />
                   <Route exact path='/notthistimemilkproduct' component={MilkPage} />
                   <Route exact path='/notthistimemandi' component={MandiPage} />
                   <Route exact path='/notthistimefruit' component={FruitPage} />
                   <Route exact path='/notthistimeorders' component={OrdersPage} />
                   <Route exact path='/notthistimepotato' component={PotatoPage} />
                   <Route exact path='/notthistimeonion' component={OnionPage} />
                   <Route exact path='/notthistimedayreport' component={DayreportPage} />

                 
                   <Route exact path='/delivery' component={DeliveryPage} />
                   <Route exact path='/management' component={ManagementPage} />
                   

                   <Redirect to="/user" />
                   </Switch>
            </div>
  
        )
}
}
export default Main;