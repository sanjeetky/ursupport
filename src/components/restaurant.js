import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label,Alert } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import {baseUrl} from '../baseUrl';
import DatePicker from "react-datepicker";

import { Control, LocalForm, Errors } from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


let Total=0;
let frequency=0;
let margin=0;


class Restro extends Component {
constructor(props){
    super()
    this.state={
        cust:[]
    }
    this.update=this.update.bind(this);

  }

  update(data)
  {
    var obj={
      username:data
    }
    fetch(  baseUrl+'/users/restro',{
      method:"PUT",
      headers:{ "Content-Type":"application/json"},
      body:JSON.stringify(obj)
    
  })
  .then(data=>data.json())
  .then(data=>alert("updated"))
  .catch(err=>console.log(err))

  }

  componentDidMount()
  {
    fetch(baseUrl+'/users')
    .then(res=>res.json())
    .then(data=>{
        this.setState({cust:data})
    })
    .catch(err=>console.log(err))
  }
  
  render() {
   
    const pending=this.state.cust.map((item)=>{
      if(item.tag=='business?')
      {
        return(
          <div >
          <h5>{item.username}</h5>
          <h5>{item.mobilenum}</h5>
          <Button onClick={()=>this.update(item.username)}>Allow</Button>
          </div>
        )
      }
      
    })

  
    return (
      <div>
          <h1>{this.state.month}</h1>
          <Link to={`/notthistimeinsert`} >
               <Button  >Insert Page</Button>
         </Link> 
           <h1>Restaurant Management</h1>

           <h3>Pending Request</h3>
           {pending}


        </div>


    );
  }
}
export default Restro;
