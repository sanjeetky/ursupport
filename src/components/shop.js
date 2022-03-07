import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label,Alert } from 'reactstrap';
    import { Link } from 'react-router-dom';
    import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import {baseUrl} from '../baseUrl';

import { Control, LocalForm, Errors } from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Shop extends Component {
constructor(props){
    super()
    this.state={
        item:[]
    }
    this.delivered=this.delivered.bind(this);
    this.cancel=this.cancel.bind(this);
}
componentDidMount()
{
    fetch( baseUrl+'/uploads/display')
    .then(res=>res.json())
    .then(data=>{
        this.setState({item:data.reverse()})
    })
    .catch(err=>console.log(err))
}

delivered(data){
    confirmAlert({
        title: 'Confirm to submit',
        message: 'Are you sure to do this.',
        buttons: [
          {
            label: 'Yes',
            onClick: () => {
                const obj={
                    id:data,
                    status:"Delivered"
                }
               fetch( baseUrl+'/delivery',{
                method:"PUT",
                headers:{ "Content-Type":"application/json"},
                body:JSON.stringify(obj)
              
            })
            .then(data=>data.json())
            .then(data=>alert("updated"))
            .catch(err=>console.log(err))
            }
          },
          {
            label: 'No',
            onClick: () => console.log("cancelled")
          }
        ]
      });
   


}

cancel(data){
  confirmAlert({
      title: 'Confirm to cancel',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
              const obj={
                  id:data,
                  status:"Cancelled"
              }
             fetch(baseUrl+ '/delivery',{
              method:"PUT",
              headers:{ "Content-Type":"application/json"},
              body:JSON.stringify(obj)
            
          })
          .then(data=>data.json())
          .then(data=>alert("updated"))
          .catch(err=>console.log(err))
          }
        },
        {
          label: 'No',
          onClick: () => console.log("cancelled")
        }
      ]
    });
 


}

handleSubmit({values,data}) {
       
  var obj={
    date:values.date,
    createdAt:values.createdAt,
    updatedAt:values.updatedAt,
    id:data._id, 
    status:"Delivered"
  }
  

 fetch(  baseUrl+'/delivery',{
    method:"PUT",
    headers:{ "Content-Type":"application/json"},
    body:JSON.stringify(obj)
  
})
.then(data=>data.json())
.then(data=>alert("updated"))
.catch(err=>console.log(err))
};

  render() {
      const items=this.state.item.map((data)=>{
       
                return(
                  <div style={{marginBottom:30}}>
               <div style={{display:'flex'}}>
          
               <p style={{margin:0,padding:0 ,marginRight:5,color:'red'}}>{data.fullname} </p>
               <p style={{margin:0,padding:0 ,marginRight:5}}> {data.telnum} </p>
               <p style={{margin:0,padding:0 ,color:'red'}}>  {data.time}</p>

               </div>
               <p style={{margin:0,padding:0}}>{data.status}</p>

               <p style={{margin:0,padding:0}}>{data.date}</p>
               <p style={{margin:0,padding:0,color:'blue'}}>{data.houseno} {data.area}</p>
               <p style={{margin:0,padding:0,marginBottom:5}}>{data.payment}</p>
                    
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


   <LocalForm onSubmit={(values) => this.handleSubmit({values,data})}>

                            
<Row className="form-group">
<Label htmlFor="description" >Date</Label>
    
        <Control.text model=".date" id="date" name="date"
            placeholder="date"
            className="form-control"
            validators={{
                required
            }}
            defaultValue={data.date}
            />
      <Errors
            className="text-danger"
            model=".date"
            show="touched"
            messages={{
                required: 'Required',
               
            }}
         />
   </Row>

                             
<Row className="form-group">
<Label htmlFor="description" >createdAt</Label>
    
        <Control.text model=".createdAt" id="createdAt" name="createdAt"
            placeholder="createdAt"
            className="form-control"
            validators={{
                required
            }}
            defaultValue={data.createdAt}
            />
      <Errors
            className="text-danger"
            model=".createdAt"
            show="touched"
            messages={{
                required: 'Required',
               
            }}
         />
   </Row>

                               
<Row className="form-group">
<Label htmlFor="description" >updatedAt</Label>
    
        <Control.text model=".updatedAt" id="updatedAt" name="updatedAt"
            placeholder="updatedAt"
            className="form-control"
            validators={{
                required
            }}
            defaultValue={data.updatedAt}
            />
      <Errors
            className="text-danger"
            model=".updatedAt"
            show="touched"
            messages={{
                required: 'Required',
               
            }}
         />
   </Row>
   <Row className="form-group">
                               
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                             
                                    </Row>
   </LocalForm>


               <Button onClick={()=>this.delivered(data._id)} style={{marginRight:10}} >Delivered</Button>
               
               <Button onClick={()=>this.cancel(data._id)} >Cancel </Button>
             
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
export default Shop;
