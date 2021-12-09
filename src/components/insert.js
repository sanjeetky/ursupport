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
            cat:[{cat:"vegetable"}],
            cities:[{city:'Ara'}]
        };

        this.handleSubmit = this.handleSubmit.bind(this);  
        this.manage=this.manage.bind(this);
    }
    manage()
    {
        alert("hello")
    }

    componentDidMount()
    {
        fetch(baseUrl+'/distributor')
        .then(response => response.json())
        .then(dishes => {
          this.setState({cat:dishes})
        })
        .catch(err=>console.log(err))

        fetch(baseUrl+'/cities')
        .then(response => response.json())
        .then(dishes => {
          this.setState({cities:dishes})
          //alert(JSON.stringify(dishes));
        })
        .catch(err=>console.log(err))
    }

    handleSubmit(values) {
       
    var obj={
        name:values.name,
        description: values.description,
        itemid: values.category+values.name+values.city,
        img: values.img,
        brand:values.character,
        cost:values.cost,
        weight:values.weight,
        quantity:"1",
        category:values.category,
        cp:values.cp,
        city:"Ara"
      }
   fetch( baseUrl+'/items',{
        method:"POST",
        headers:{ "Content-Type":"application/json"},
        body:JSON.stringify(obj)
      
    })
    .then(data=>data.json())
    .then(data=>alert(data.status))
    .catch(err=>console.log(err))
};

    render() {
        return(
            <div className="container">
                <div className="row row-content">
                   <div  style={{flexDirection:'row'}}>
                      <h3>Customer</h3>
                     
                   
                      <Link to={`/hellovegetable`} >
                      <Button  style={{margin:20}}> Vegetable</Button>
                      </Link>
                      <Link to={`/hellofruit`} >
                        <Button style={{margin:20}} >Fruit</Button>
                      </Link>
                     
                      <Link to={`/hellomandi`} >
                        <Button style={{margin:20}} >Festival</Button>
                      </Link>
                     <Link to={`/hellomilkproduct`} >
                        <Button style={{margin:20}} >Milk Product</Button>
                    </Link>

                    <Link to={`/hellopotato`} >
                        <Button style={{margin:20}} >Potato</Button>
                    </Link>
                   
                    <Link to={`/helloonion`} >
                        <Button style={{margin:20}} >Onion</Button>
                    </Link>
                   
                    <Link to={`/helloorders`} >
                        <Button style={{margin:20}} >Orders</Button>
                    </Link>
                   

                    <Link to={`/hellodayreport`} >
                        <Button style={{margin:20}} >Monthly Report</Button>
                    </Link>

                    <hr/>
                       

                    <hr/>
                    <Link to={`/hellodelivery`} >
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




<Row className="form-group">   
<Label htmlFor="cost1">cost</Label>
         <Control.text model=".cost" id="cost" name="cost"
              className="form-control"
              validators={{
                 required, minLength: minLength(1)
             }}
             />
              <Errors
             className="text-danger"
             model="cost"
             show="touched"
             messages={{
                 required: 'Required',
                 minLength: 'Must be greater than 1 characters'                        
             }}
          />

</Row>
<Row className="form-group">   
<Label htmlFor="weight1">weight</Label>
         <Control.text model=".weight" id="weight" name="weight"
              className="form-control"
              validators={{
                 required, minLength: minLength(1)
             }}
             />
              <Errors
             className="text-danger"
             model="weight"
             show="touched"
             messages={{
                 required: 'Required',
                 minLength: 'Must be greater than 1 characters'                        
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



                               <Row className="form-group" >
                                <Label htmlFor="category" >Category </Label>
                                    <Control.select model=".category" id="category" name="category"
                                        placeholder="category"
                                        className="form-control"  
                                        defaultValue={this.state.cat[0].cat}
                                        > 
                                         {this.state.cat.filter((item)=> item.city=="Ara").map((item, index) => {
                   return (<option label={item.cat} value={item.cat} key={index}>{item.cat}</option>) 
                   })}
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
