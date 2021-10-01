import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label,Alert } from 'reactstrap';
    import { Link } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import {baseUrl} from '../baseUrl';

import { Control, LocalForm, Errors } from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Orders extends Component {
constructor(props){
    super()
    this.state={
        item:[]
    }
    
}
componentDidMount()
{
    fetch( baseUrl+'/delivery/display')
    .then(res=>res.json())
    .then(data=>{
        this.setState({item:data.reverse()})
    })
    .catch(err=>console.log(err))
}



  render() {
      const items=this.state.item.map((data)=>{
       
                return(
                  <div style={{marginBottom:30}}>
               <div style={{display:'flex'}}>
          
               <p style={{margin:0,padding:0 ,marginRight:5,color:'red'}}>{data.fullname} </p>
               <p style={{margin:0,padding:0 ,marginRight:5}}> {data.telnum} </p>
               <p style={{margin:0,padding:0 ,color:'red'}}>  {data.time}</p>

               </div>
               <p style={{margin:0,padding:0}}>{data.remark}</p>

               <p style={{margin:0,padding:0}}>{data.date}</p>
               <p style={{margin:0,padding:0,color:'blue'}}>{data.houseno} {data.area}</p>
               <p style={{margin:0,padding:0,marginBottom:5}}>{data.payment}</p>
               <p style={{margin:0,padding:0,marginBottom:5,color:'red'}}>{data.status}</p>
               <h4>orders</h4>
               {data.item.map((hello)=>{
                   return(
                       <div style={{marginBottom:5}}>
                         <div style={{display:'flex'}}>
                   <p style={{margin:0,padding:0,color:'blue',marginRight:5}}>{hello.name} </p>
                   <p style={{margin:0,padding:0,marginRight:5}}> {hello.brand} </p>
                   <p style={{margin:0,padding:0}}> Cost:{hello.cost}</p>
                  </div>

                  <div style={{display:'flex'}}>
                   <p style={{margin:0,padding:0,marginRight:3,color:'red'}}>{hello.weight} </p>
                   <p>X</p>
                   <p style={{margin:0,padding:0,color:'red',marginLeft:2}}> {hello.quantity}</p>
                </div>
                   </div>
                   )
               })}
             
               <p style={{margin:0,padding:0}}>Total Cost: {data.price}</p>
              
             
               <hr/>
               </div>
               
                )
              
      });
       
      
    return (
      <div>
          <h1>Manage</h1>

          <Link to={`/helloinsert`} >
               <Button  >Insert Page</Button>
         </Link>          
          {items}
      </div>
    );
  }
}
export default Orders;
