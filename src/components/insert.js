import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label,Alert } from 'reactstrap';
    import { Link } from 'react-router-dom';

    import {baseUrl} from '../baseUrl';

import { Control, LocalForm, Errors } from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
var latitude="";
var longitude="";

class Insert extends Component {
    constructor(props) {
        super();

        this.state = {
            cat:[{cat:"seed"}],
            latitude:"",
            longitude:""
        };

        this.handleSubmit = this.handleSubmit.bind(this);  
        this.manage=this.manage.bind(this);
        this.handleshop=this.handleshop.bind(this);
        this.getMyLocation = this.getMyLocation.bind(this);

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
        .catch(err=>console.log(err));

        this.getMyLocation();

    }

    getMyLocation() {
        const location = window.navigator && window.navigator.geolocation
        
        if (location) {
          location.getCurrentPosition((position) => {
            this.setState({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            })
          }, (error) => {
          })
        }
      }


    handleSubmit(values) {
       
    var obj={
        name:values.name,
        description: values.description,
        itemid: values.category+values.name+values.city,
        img: values.img,
        brand:values.character,
        cat:values.category
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


handleshop(values) {
       if(this.state.latitude!="")
       {
    var object={
        name:values.name,
        address: values.address,
        mobile: values.mobile,
        latitude: this.state.latitude,
        longitude:this.state.longitude,
      }
   fetch( baseUrl+'/centre',{
        method:"POST",
        headers:{ "Content-Type":"application/json"},
        body:JSON.stringify(object)
    })
    .then(data=>data.json())
    .then(data=>alert(data.status))
    .catch(err=>console.log(err))
}
else
{
    alert("allow location access!!");
}
    
};


    render() {
        return(
            <div className="container">
                <div className="row row-content">
                   <div  style={{flexDirection:'row'}}>
                      <h3>Customer</h3>
                     
                      <Link to={`/helloseed`} >
                      <Button  style={{margin:20}}> Seed</Button>
                      </Link>
                      <Link to={`/hellofertilizer`} >
                        <Button style={{margin:20}} >Fertilizer</Button>
                      </Link>
                     
                      <Link to={`/helloinsecticide`} >
                        <Button style={{margin:20}} >Insecticide</Button>
                      </Link>
                     <Link to={`/helloequipment`} >
                        <Button style={{margin:20}} >Equipment</Button>
                    </Link>

                   
                   
                    <Link to={`/helloshop`} >
                        <Button style={{margin:20}} >Shop</Button>
                    </Link>
                   

                    <Link to={`/helloquestion`} >
                        <Button style={{margin:20}} >Question</Button>
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
                                         {this.state.cat.map((item, index) => {
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

                    <div>

                        <text style={{margin:50,alignSelf:'center',fontSize:30}}>Shop Addition</text>
                    
                    <LocalForm onSubmit={(values) => this.handleshop(values)}>
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
                            <Label htmlFor="address" >address</Label>
                                
                                    <Control.text model=".address" id="address" name="address"
                                        placeholder="address"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                        />
                                  <Errors
                                        className="text-danger"
                                        model=".address"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be equal to 10 numbers'
                                        }}
                                     />
                               </Row>

                                 
                            <Row className="form-group">
                            <Label htmlFor="mobile" >mobile</Label>
                                
                                    <Control.text model=".mobile" id="mobile" name="mobile"
                                        placeholder="size:small"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(5)
                                        }}
                                        />
                                  <Errors
                                        className="text-danger"
                                        model=".mobile"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be equal to 5 numbers'
                                        }}
                                     />
                               </Row>

    
                               <h4>latitude:{this.state.latitude}</h4>
                               <h4>longitude:{this.state.longitude}</h4>

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
