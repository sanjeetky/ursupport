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

        
          
        return (
            <div>
                 <Switch>
                 <Route exact path='/admin' component={UserPage} />
                   <Route exact path='/helloinsert' component={InsertPage} />
                   <Route exact path='/hellovegetable' component={VegPage} />
                   <Route exact path='/hellomilkproduct' component={MilkPage} />
                   <Route exact path='/hellomandi' component={MandiPage} />
                   <Route exact path='/hellofruit' component={FruitPage} />
                   <Route exact path='/helloorders' component={OrdersPage} />
                   <Route exact path='/hellopotato' component={PotatoPage} />
                   <Route exact path='/helloonion' component={OnionPage} />


                  

                   <Route exact path='/hellodayreport' component={DayreportPage} />

                


                   <Route exact path='/deliveryman' component={DeliverymanPage} />
                   <Route exact path='/hellodelivery' component={DeliveryPage} />
                   <Route exact path='/hellomanagement' component={ManagementPage} />
                   

                   <Redirect to="/admin" />
                   </Switch>
            </div>
  
        )
}
}
export default Main;