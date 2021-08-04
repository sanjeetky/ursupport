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
          
        return (
            <div>
                 <Switch>
                   <Route exact path='/insert' component={InsertPage} />
                   <Route exact path='/vegetable' component={VegPage} />
                   <Route exact path='/milkproduct' component={MilkPage} />
                   <Route exact path='/mandi' component={MandiPage} />
                   <Route exact path='/fruit' component={FruitPage} />
                   <Route exact path='/orders' component={OrdersPage} />
                   <Route exact path='/potato' component={PotatoPage} />
                   <Route exact path='/onion' component={OnionPage} />
                   <Route exact path='/dayreport' component={DayreportPage} />

                 
                   <Route exact path='/delivery' component={DeliveryPage} />
                   <Route exact path='/management' component={ManagementPage} />
                   

                   <Redirect to="/insert" />
                   </Switch>
            </div>
  
        )
}
}
export default Main;