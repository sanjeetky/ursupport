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


class Dikhao extends React.Component {
    constructor(props){
        super()
        this.state={
            startDate:new Date(),
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
            this.setState({delivery:data})
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
          margin=0;
     
      }
      
     
    //.filter(item=>item.date[4]==this.props.time[0]&&item.date[5]==this.props.time[1]&&item.date[6]==this.props.time[2])
    render () {
        Total=0;
        frequency=0;
   margin=0;
        const custmanage=this.state.cust.map((item)=>{
     
            let totalvalue=0;
            let freq=0;
             this.state.delivery.filter(item=>item.date[4]==this.props.time[0]&&item.date[5]==this.props.time[1]&&item.date[6]==this.props.time[2]).map((dev)=>{
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
     
      this.state.delivery.filter(item=>item.date[4]==this.props.time[0]&&item.date[5]==this.props.time[1]&&item.date[6]==this.props.time[2]).map((dev)=>{
        dev.item.map(spitem=>{
          if(spitem.itemid==item.itemid&&spitem.brand==item.brand)
          {
             quantity+=+spitem.quantity;
             cost+=+(spitem.cost*spitem.quantity);
             cp+=+(spitem.cp*spitem.quantity)
             margin=margin+(cost-cp)
          }
        })
   })
   if(quantity!=0)
    {
    
     return(
       <div class='row'>
         <div class="col-md-2">{item.name + " ("+ item.brand +")"}</div>
         <div class="col-md-1">{quantity}</div>
         <div class="col-md-1">{cost}</div>
         <div class="col-md-1">{cp}</div>
         <div class="col-md-1">{item.weight}</div>
         <div class="col-md-1">{cost-cp}</div>
         
       </div>
     )
    };
   })

      return(
        <div>
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
           <div class="col-md-1">Total selling price</div>
           <div class="col-md-1">Total costing  price</div>
           <div class="col-md-1">weight</div>
           <div class="col-md-1">margin</div>

           </div> 
          {itemmanage}
          <h2>{margin}</h2>
        </div>
      )
    }
  }





class Dayreport extends Component {
constructor(props){
    super()
    this.state={
        month:"Jul"
    }
  }

  
  render() {
   
    

  
    return (
      <div>
          <h1>{this.state.month}</h1>
          <Link to={`/helloinsert`} >
               <Button  >Insert Page</Button>
         </Link> 



         <div >
         <LocalForm onSubmit={(values) => this.setState({month:values.month})}>
                            <Row className="form-group">
                                <Label htmlFor="month"> Month</Label>
                                
                                    <Control.text model=".month" id="month" name="month"
                                        placeholder="Jul (3 letters and 1st one capital letter and rest small)"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(1), maxLength: maxLength(3)
                                        }}

                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".month"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 1 characters',
                                            maxLength: 'Must be 18 characters or less'
                                        }}
                                     />
                               </Row>

                               <Row className="form-group">
                                  <Button type="submit" color="primary">
                                     Submit
                                  </Button>                       
                               </Row>

                               </LocalForm>
                               </div>


          <Dikhao time={this.state.month}/>
      </div>


    );
  }
}
export default Dayreport;
