import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
    import { Link } from 'react-router-dom';


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

  render() {
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
                   <p style={{margin:0,padding:0}}>{hello.name}</p>
                   <p style={{margin:0,padding:0}}>{hello.brand}</p>
                   <p style={{margin:0,padding:0}}>{hello.weight}</p>
                   <p style={{margin:0,padding:0}}>{hello.quantity}</p>

                   </div>
                   )
               })}
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
