import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label,Alert } from 'reactstrap';
    import { Link } from 'react-router-dom';
    import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css'; 


import { Control, LocalForm, Errors } from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Delivery extends Component {
constructor(props){
    super()
    this.state={
        item:[]
    }
    this.delivered=this.delivered.bind(this);
}
componentDidMount()
{
    fetch( 'https://urbanreach.herokuapp.com/delivery')
    .then(res=>res.json())
    .then(data=>{
        this.setState({item:data})
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
               fetch( 'https://urbanreach.herokuapp.com/delivery',{
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
  render() {
    //  Alert(this.state.item)
      const items=this.state.item.map((data)=>{
           return(
               <div style={{marginBottom:30}}>
               <p style={{margin:0,padding:0}}>{data.fullname}</p>
               <p style={{margin:0,padding:0}}>{data.telnum}</p>
               <p style={{margin:0,padding:0}}>{data.date}</p>

               <p style={{margin:0,padding:0}}>{data.time}</p>

               <p style={{margin:0,padding:0}}>{data.houseno}</p>
               <p style={{margin:0,padding:0,marginBottom:5}}>{data.area}</p>
               <h4>orders</h4>
               {data.item.map((hello)=>{
                   return(
                       <div style={{marginBottom:10}}>
                   <p style={{margin:0,padding:0}}>{hello.name} {hello.brand}</p>
                   <p style={{margin:0,padding:0}}>{hello.weight} X {hello.quantity}</p>
                   <p style={{margin:0,padding:0}}>Cost:{hello.cost}</p>
                
                   </div>
                   )
               })}
               
               <p style={{margin:0,padding:0}}>Total Cost: {data.item.reduce((total,item)=>{return total+ (item.cost*item.quantity) },0)}</p>

                   
               <Button onClick={()=>this.delivered(data._id)} >Delivered</Button>

               <hr/>
               </div>
           )
      });
       
      
    return (
      <div>
          <h1>Manage</h1>

          <Link to={`/insert`} >
               <Button  >Insert Page</Button>
         </Link>          
          {items}
      </div>
    );
  }
}
export default Delivery;
