import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
    import { Link } from 'react-router-dom';


import { Control, LocalForm, Errors } from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class Manage extends Component {
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
    fetch( 'https://urbanreach.herokuapp.com/items')
    .then(res=>res.json())
    .then(data=>{
        this.setState({item:data})
    })
    .catch(err=>console.log(err))
}

handleSubmit({values,item}) {
       
    
    

      
    var obj={
      description: values.description,
      itemid:item.itemid,
      img: values.img,
      cost:values.cost,
      weight:values.weight,
    }

   fetch( 'https://urbanreach.herokuapp.com/items',{
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
    fetch('https://urbanreach.herokuapp.com/items',{
        method:"DELETE",
        headers:{ "Content-Type":"application/json"},
        body:JSON.stringify({itemid:data})
    })
    .then(res=>res.json())
    .then(data=>alert(data))
    .catch(err=>console.log(err))
}
  render() {

    const items=this.state
    .item.map((item)=>{
  
        return(
    
          <div >
         
             <img src={item.img} alt=""/>
    
             
             <h4 >{item.name}</h4>
             <div className="col-12 col-md-9">
                    <LocalForm onSubmit={(values) => this.handleSubmit({values,item})}>

                            
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
                                <Label htmlFor="img" >Image</Label>
                                    < Control.text model=".img" id="img" name="img"
                                        placeholder="image address"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(1)
                                        }}
                                        defaultValue={item.img}
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
                                        defaultValue={item.cost}
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
             defaultValue={item.weight}
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

          <Link to={`/insert`} >
               <Button  >Insert Page</Button>
         </Link>          
          {items}
      </div>
    );
  }
}
export default Manage;
