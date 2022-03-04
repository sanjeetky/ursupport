import React, { Component } from 'react';
import Insert from './insert.js';
import Seed from './seed.js';
import Fertilizer from './fertilizer';
import Insecticide from './insecticide';
import Equipment from './equipment.js';
import Orders from './orders.js';
import Manage from './manage.js';
import Dayreport from './dayreport';
import User from './user';

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
        
         

         
          const SeedPage = () => {
            return(
                <Seed />
            );
          };

         
         
          const  FertilizerPage = () => {
            return(
                <Fertilizer  />
            );
          };


          const InsecticidePage = () => {
            return(
                <Insecticide />
            );
          };
         


         
          const EquipmentPage = () => {
            return(
                <Equipment />
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
                   <Route exact path='/helloseed' component={SeedPage} />
                   <Route exact path='/hellofertilizer' component={FertilizerPage} />
                   <Route exact path='/helloinsecticide' component={InsecticidePage} />
                   <Route exact path='/helloequipment' component={EquipmentPage} />
                   <Route exact path='/helloorders' component={OrdersPage} />

                   <Route exact path='/hellodayreport' component={DayreportPage} />
                   <Route exact path='/hellodelivery' component={DeliveryPage} />
                   <Route exact path='/hellomanagement' component={ManagementPage} />
                   

                   <Redirect to="/admin" />
                   </Switch>
            </div>
  
        )
}
}
export default Main;