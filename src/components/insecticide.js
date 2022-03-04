import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
    import { Link } from 'react-router-dom';
import {baseUrl} from '../baseUrl';

import { Control, LocalForm, Errors } from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Insecticide extends Component {
constructor(props){
    super()
    this.state={
        item:[]
    }
    this.delete=this.delete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
}
componentDidMount()
{
    fetch( baseUrl+'/items')
    .then(res=>res.json())
    .then(data=>{
        this.setState({item:data})
    })
    .catch(err=>console.log(err))
}

handleSubmit({values,item}) {
       
    
    

      
    var obj={
      name:values.name,
      description: values.description,
      img: values.img,
      brand:values.brand,
      itemid:item.itemid,
     
    }
    console.log(obj)

   fetch(  baseUrl+'/items',{
      method:"PUT",
      headers:{ "Content-Type":"application/json"},
      body:JSON.stringify(obj)
    
  })
  .then(data=>data.json())
  .then(data=>alert("updated"))
  .catch(err=>console.log(err))
};

delete(data)
{
    fetch( baseUrl+'/items',{
        method:"DELETE",
        headers:{ "Content-Type":"application/json"},
        body:JSON.stringify({itemid:data})
    })
    .then(res=>res.json())
    .then(data=>alert(data))
    .catch(err=>console.log(err))
}
  render() {

    const items=this.state.item.filter((item)=>item.category=="insecticide").map((item)=>{

  
        return(
    
          <div >
         
             <img src={item.img} alt=""/>
    
             
             <h4 >{item.name}</h4>
             <div >
                    <LocalForm onSubmit={(values) => this.handleSubmit({values,item})}>


                    <Row className="form-group">
                            <Label htmlFor="description" >name</Label>
                                
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(10)
                                        }}
                                        defaultValue={item.name}
                                        />
                                  <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be equal to 10 numbers'
                                        }}
                                     />
                               </Row>
                            
                            <Row className="form-group">
                            <Label htmlFor="description" >description</Label>
                                
                                    <Control.text model=".description" id="description" name="description"
                                        placeholder="description"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(10)
                                        }}
                                        defaultValue={item.description}
                                        />
                                  <Errors
                                        className="text-danger"
                                        model=".description"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be equal to 10 numbers'
                                        }}
                                     />
                               </Row>
                               <Row className="form-group">
                            <Label htmlFor="brand" >character</Label>
                                
                                    <Control.text model=".brand" id="brand" name="brand"
                                        placeholder="brand"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(5)
                                        }}
                                        defaultValue={item.brand }
                                        />
                                  <Errors
                                        className="text-danger"
                                        model=".brand"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be equal to 5 letters'
                                        }}
                                     />
                               </Row>

 
<Row className="form-group">   
<Label htmlFor="img">img</Label>
         <Control.text model=".img" id="img" name="img"
              className="form-control"
              validators={{
                 required, minLength: minLength(1)
             }}
             defaultValue={item.img}
             />
              <Errors
             className="text-danger"
             model="img"
             show="touched"
             messages={{
                 required: 'Required',
                 minLength: 'Must be greater than 1 characters'                        
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
           
            


           <Button onClick={()=>this.delete(item.itemid)} >Delete</Button>
           <hr/>
          </div>
    
    
        )
      })

      
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
export default Insecticide;
