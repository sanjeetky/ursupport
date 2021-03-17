import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
    import { Link } from 'react-router-dom';


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
       
       if(values.zone=="evening")
       {
         
          var obj={
            name:values.name,
            description: values.description,
            itemid:"evening"+ values.name,
            img: values.img,
            brand:values.character,
            cost:values.cost,
            weight:values.weight,
            quantity:"1",
            category:values.category
          }

         fetch( 'https://urbanreach.herokuapp.com/eveningitems',{
            method:"POST",
            headers:{ "Content-Type":"application/json"},
            body:JSON.stringify(obj)
          
        })
        .then(data=>data.json())
        .then(data=>alert(data.status))
        .catch(err=>console.log(err))
    }
    else
    {
        var obj={
            name:values.name,
            description: values.description,
            itemid:"morning"+ values.name,
            img: values.img,
            brand:values.character,
            cost:values.cost,
            weight:values.weight,
            quantity:"1",
            category:values.category
          }

         fetch( 'https://urbanreach.herokuapp.com/morningitems',{
            method:"POST",
            headers:{ "Content-Type":"application/json"},
            body:JSON.stringify(obj)
          
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
                      <h4>Morning</h4>
                      <Link to={`/morningvegetable`} >
                      <Button  style={{margin:20}}> Vegetable</Button>
                      </Link>
                      <Link to={`/morningfruit`} >
                        <Button style={{margin:20}} >Fruit</Button>
                      </Link>
                     
                      <Link to={`/morningmandi`} >
                        <Button style={{margin:20}} >Mandi</Button>
                      </Link>
                     <Link to={`/morningmilkproduct`} >
                        <Button style={{margin:20}} >Milk Product</Button>
                    </Link>
                    <hr/>
                    <h4>Evening</h4>
                      <Link to={`/eveningvegetable`} >
                      <Button  style={{margin:20}}> Vegetable</Button>
                      </Link>
                      <Link to={`/eveningfruit`} >
                        <Button style={{margin:20}} >Fruit</Button>
                      </Link>
                     
                      <Link to={`/eveningmandi`} >
                        <Button style={{margin:20}} >Mandi</Button>
                      </Link>
                     <Link to={`/eveningmilkproduct`} >
                        <Button style={{margin:20}} >Milk Product</Button>
                    </Link>

                    <hr/>
                    <Link to={`/delivery`} >
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
                            <Label htmlFor="character" >Items character</Label>
                                
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
                                <Label htmlFor="img" >Image</Label>
                                    < Control.text model=".img" id="img" name="img"
                                        placeholder="image address"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(1)
                                        }}
                                        />
                                            <Errors
                                        className="text-danger"
                                        model=".img"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 1 characters',
                                        }}
                                     />
                           </Row>

                           <Row className="form-group">

                           <Label htmlFor="cost">Cost</Label>
                                    <Control.text model=".cost" id="cost" name="cost"
                                         className="form-control"
                                         validators={{
                                            required, minLength: minLength(1)
                                        }}
                                        />
                                         <Errors
                                        className="text-danger"
                                        model=".cost"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 1 characters'                        
                                        }}
                                     />

                          </Row>

                          <Row className="form-group">

<Label htmlFor="weight">Weight</Label>
         <Control.text model=".weight" id="weight" name="weight"
              className="form-control"
              validators={{
                 required, minLength: minLength(1)
             }}
             />
              <Errors
             className="text-danger"
             model=".weight"
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
                                         <option value="special">mandi</option>
                                         <option value="festival">festival</option>
                                        </Control.select>
                           </Row>
                         
                           <Row className="form-group" >
                                <Label htmlFor="zone" >zone </Label>
                                    <Control.select model=".zone" id="zone" name="zone"
                                        placeholder="zone"
                                        className="form-control"  
                                        defaultValue="morning"
                                        > 
                                         <option value="morning">morning</option>
                                         <option value="evening">evening</option>
                                        
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
