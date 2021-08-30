import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
    import { Link } from 'react-router-dom';

    import {baseUrl} from '../baseUrl';

import { Control, LocalForm, Errors } from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Insert extends Component {
    constructor(props) {
        super();

        this.state = {
            order:[]
        };

        this.handleSubmit = this.handleSubmit.bind(this);  
        this.manage=this.manage.bind(this);
    }
    manage()
    {
        alert("hello")
    }

    handleSubmit(values) {
       
      
         
         
if(values.btype=="business")
{
    var obj1={
        name:values.name,
        description: values.description,
        itemid:"restro"+ values.category+values.name+values.brand,
        img: values.img1,
        brand:values.character,
        cost:values.cost1,
        weight:values.weight1,
        quantity:"1",
        category:values.category,
        cp:values.cp,
        picker:[
             {img:values.img1,weight:values.weight1,cost:values.cost1},
             {img:values.img2,weight:values.weight2,cost:values.cost2},
        ]
      }
    fetch( baseUrl+'/restroitems',{
        method:"POST",
        headers:{ "Content-Type":"application/json"},
        body:JSON.stringify(obj1)
      
    })
    .then(data=>data.json())
    .then(data=>alert(data.status))
    .catch(err=>console.log(err))
}
else
{
    var obj2={
        name:values.name,
        description: values.description,
        itemid: values.category+values.name+values.brand,
        img: values.img1,
        brand:values.character,
        cost:values.cost1,
        weight:values.weight1,
        quantity:"1",
        category:values.category,
        cp:values.cp,
        picker:[
             {img:values.img1,weight:values.weight1,cost:values.cost1},
             {img:values.img2,weight:values.weight2,cost:values.cost2},
        ]
      }
    fetch( baseUrl+'/items',{
        method:"POST",
        headers:{ "Content-Type":"application/json"},
        body:JSON.stringify(obj2)
      
    })
    .then(data=>data.json())
    .then(data=>alert(data.status))
    .catch(err=>console.log(err))
}
        
};

    render() {
        return(
            <div className="container">
                <div className="row row-content">
                   <div  style={{flexDirection:'row'}}>
                      <h3>Insert Page</h3>
                     
                   
                      <Link to={`/notthistimevegetable`} >
                      <Button  style={{margin:20}}> Vegetable</Button>
                      </Link>
                      <Link to={`/notthistimefruit`} >
                        <Button style={{margin:20}} >Fruit</Button>
                      </Link>
                     
                      <Link to={`/notthistimemandi`} >
                        <Button style={{margin:20}} >Festival</Button>
                      </Link>
                     <Link to={`/notthistimemilkproduct`} >
                        <Button style={{margin:20}} >Milk Product</Button>
                    </Link>

                    <Link to={`/notthistimepotato`} >
                        <Button style={{margin:20}} >Potato</Button>
                    </Link>
                   
                    <Link to={`/notthistimeonion`} >
                        <Button style={{margin:20}} >Onion</Button>
                    </Link>
                   
                    <Link to={`/notthistimeorders`} >
                        <Button style={{margin:20}} >Orders</Button>
                    </Link>
                   

                    <Link to={`/notthistimedayreport`} >
                        <Button style={{margin:20}} >Monthly Report</Button>
                    </Link>

                    <hr/>
                    <Link to={`/notthistimedelivery`} >
                        <Button style={{margin:20}} >Delivery</Button>
                    </Link>
                   
                   
                      <hr/>
                   </div>
                    <div className="col-12 col-md-9">
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="name"> Name</Label>
                                
                                    <Control.text model=".name" id="name" name="name"
                                        placeholder="Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(2), maxLength: maxLength(18)
                                        }}
                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 1 characters',
                                            maxLength: 'Must be 18 characters or less'
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
                            <Label htmlFor="character" >Brand</Label>
                                
                                    <Control.text model=".character" id="character" name="character"
                                        placeholder="size:small"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(5)
                                        }}
                                        />
                                  <Errors
                                        className="text-danger"
                                        model=".character"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be equal to 5 numbers'
                                        }}
                                     />
                               </Row>

                           

                          


                          <Row className="form-group">

<Label htmlFor="cp">buying price</Label>
         <Control.text model=".cp" id="cp" name="cp"
              className="form-control"
              validators={{
                 required, minLength: minLength(1)
             }}
             />
              <Errors
             className="text-danger"
             model=".cp"
             show="touched"
             messages={{
                 required: 'Required',
                 minLength: 'Must be greater than 1 characters'                        
             }}
          />

</Row>


<h3>Picker1</h3>

<Row className="form-group">   
<Label htmlFor="cost1">cost1</Label>
         <Control.text model=".cost1" id="cost1" name="cost1"
              className="form-control"
              validators={{
                 required, minLength: minLength(1)
             }}
             />
              <Errors
             className="text-danger"
             model="cost1"
             show="touched"
             messages={{
                 required: 'Required',
                 minLength: 'Must be greater than 1 characters'                        
             }}
          />

</Row>
<Row className="form-group">   
<Label htmlFor="weight1">weight1</Label>
         <Control.text model=".weight1" id="weight1" name="weight1"
              className="form-control"
              validators={{
                 required, minLength: minLength(1)
             }}
             />
              <Errors
             className="text-danger"
             model="weight1"
             show="touched"
             messages={{
                 required: 'Required',
                 minLength: 'Must be greater than 1 characters'                        
             }}
          />

</Row>
<Row className="form-group">   
<Label htmlFor="img1">img1</Label>
         <Control.text model=".img1" id="img1" name="img1"
              className="form-control"
              validators={{
                 required, minLength: minLength(1)
             }}
             />
              <Errors
             className="text-danger"
             model="img1"
             show="touched"
             messages={{
                 required: 'Required',
                 minLength: 'Must be greater than 1 characters'                        
             }}
          />

</Row>

<h3>Picker2</h3>

<Row className="form-group">   
<Label htmlFor="cost2">cost2</Label>
         <Control.text model=".cost2" id="cost2" name="cost2"
              className="form-control"
              validators={{
                 required, minLength: minLength(1)
             }}
             />
              <Errors
             className="text-danger"
             model="cost2"
             show="touched"
             messages={{
                 required: 'Required',
                 minLength: 'Must be greater than 1 characters'                        
             }}
          />

</Row>


<Row className="form-group">   
<Label htmlFor="weight2">weight2</Label>
         <Control.text model=".weight2" id="weight2" name="weight2"
              className="form-control"
              validators={{
                 required, minLength: minLength(1)
             }}
             />
              <Errors
             className="text-danger"
             model="weight2"
             show="touched"
             messages={{
                 required: 'Required',
                 minLength: 'Must be greater than 1 characters'                        
             }}
          />

</Row>



<Row className="form-group">   
<Label htmlFor="img2">img2</Label>
         <Control.text model=".img2" id="img2" name="img2"
              className="form-control"
              validators={{
                 required, minLength: minLength(1)
             }}
             />
              <Errors
             className="text-danger"
             model="img2"
             show="touched"
             messages={{
                 required: 'Required',
                 minLength: 'Must be greater than 1 characters'                        
             }}
          />

</Row>












                               <Row className="form-group" >
                                <Label htmlFor="category" >Category </Label>
                                    <Control.select model=".category" id="category" name="category"
                                        placeholder="category"
                                        className="form-control"  
                                        defaultValue="vegetable"
                                        > 
                                         <option value="vegetable">vegetable</option>
                                         <option value="milkproduct">milkproduct</option>
                                         <option value="fruit">fruit</option>
                                         <option value="festival">festival</option>
                                         <option value="potato">Potato</option>
                                         <option value="onion">Onion</option>
                                        </Control.select>
                           </Row>
                         
                           <Row className="form-group" >
                                <Label htmlFor="btype" >Business type </Label>
                                    <Control.select model=".btype" id="btype" name="btype"
                                        placeholder="btype"
                                        className="form-control"  
                                        defaultValue="customer"
                                        > 
                                         <option value="customer">customer</option>
                                         <option value="business">business</option>
                                        </Control.select>
                           </Row>
                         
                            
                            <Row className="form-group">
                               
                                    <Button type="submit" color="primary">
                                        Add
                                    </Button>
                             
                                    </Row>
                        </LocalForm>
                    </div>
               </div>

               </div>
        );
    }
}
   


export default Insert;
