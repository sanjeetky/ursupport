import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label,Alert } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import DataGrid from 'react-data-grid';
import {baseUrl} from '../baseUrl';



let Total=0;
let frequency=0;





class Manage extends Component {
constructor(props){
    super()
    this.state={
        delivery:[],
        cust:[],
        item:[]  
    }
  }


componentDidMount()
{
  fetch(baseUrl+'/delivery/display')
  .then(res=>res.json())
  .then(data=>{
      this.setState({delivery:data.filter(item=>item.date[4]=='J'&&item.date[5]=='u'&&item.date[6]=='l')})
  })
  .catch(err=>console.log(err))


    fetch(baseUrl+'/users')
    .then(res=>res.json())
    .then(data=>{
        this.setState({cust:data})
    })
    .catch(err=>console.log(err))

    fetch(baseUrl+'/items')
    .then(res=>res.json())
    .then(data=>{
        this.setState({item:data})
    })
    .catch(err=>console.log(err))
    Total=0;
   frequency=0;
    
}



  render() {

     const custmanage=this.state.cust.map((item)=>{
     
         let totalvalue=0;
         let freq=0;
          this.state.delivery.map((dev)=>{
             if(dev.username==item.username)
             {
             totalvalue+=+dev.price
             freq++;
             }
         })

        
        if(freq!=0)
        {
          Total=Total+totalvalue;
         frequency=frequency+freq;
         return(
           <div class='row'>
             <div class="col-md-2">{item.username}</div>
             <div class="col-md-1">{totalvalue}</div>
             <div class="col-md-1">{freq}</div>
             <div class="col-md-1">{item.mobilenum}</div>
             <p> {item.area} {item.houseno}</p>
           </div>
         )
        };
})

const itemmanage=this.state.item.map((item)=>{
     
  let quantity=0;
  let cost=0;
  let cp=0;
   this.state.delivery.map((dev)=>{
     dev.item.map(spitem=>{
       if(spitem.itemid==item.itemid)
       {
          quantity+=+spitem.quantity;
          cost+=+(spitem.cost*spitem.quantity);
          cp+=+(spitem.cp*spitem.quantity)
       }
     })
})
if(quantity!=0)
 {
 
  return(
    <div class='row'>
      <div class="col-md-2">{item.name}</div>
      <div class="col-md-1">{quantity}</div>
      <div class="col-md-1">{cost}</div>
      <div class="col-md-1">{cp}</div>
      <div class="col-md-1">{item.weight}</div>
      <div class="col-md-1">{cost.cp}</div>
      
    </div>
  )
 };
})
     
    return (
      <div>
          <h1>July</h1>

          <Link to={`/insert`} >
               <Button  >Insert Page</Button>
         </Link>    

         <h1>User Profile</h1> 
            <div class='row'>
            <div class="col-md-2">username</div>
            <div class="col-md-1">amount</div>
            <div class="col-md-1">freq</div>
            <div class="col-md-1">mobile</div>
            <p>address</p>
            </div>    
            {custmanage}
            <h2>Total amount: {Total}   Order count : {frequency}</h2>
         
           <h1>Item Profile</h1>  
           <div class='row'>
           <div class="col-md-2">Name</div>
           <div class="col-md-1">quantity</div>
           <div class="col-md-1">selling price</div>
           <div class="col-md-1">costing  price</div>
           <div class="col-md-1">weight</div>
           <div class="col-md-1">margin</div>

           </div> 
          {itemmanage}
        
      </div>
    );
  }
}
export default Manage;
