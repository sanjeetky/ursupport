import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label,Alert } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import DataGrid from 'react-data-grid';
import {baseUrl} from '../baseUrl';

import { Control, LocalForm, Errors } from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);



class Question extends Component {
constructor(props){
    super()
    this.state={
        questions:[]
    }
    this.handleSubmit = this.handleSubmit.bind(this);  
    this.handleComment=this.handleComment.bind(this);
  }

  handleSubmit({values,item}) {
fetch(baseUrl+'/upload/state',{
   method:"PUT",
   headers:{"Content-Type":"application/json"},
   body:JSON.stringify({id:item._id,state:values.state})
 })
 .then(res=>res.json())
 .then(res=>{
   alert("submitted");
 })
 .catch(err=>console.log(err))

  }

  handleComment({values,item}){
    item.comments.push({author:"Urban Reach Expert",message:values.comment});
    var comments=item.comments;
   
   fetch(baseUrl+'/upload/comment',{
       method:"PUT",
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify({id:item._id,comments:comments})
     })
     .then(res=>res.json())
     .then(res=>{
       alert("submitted");
     })
     .catch(err=>console.log(err))
  }
componentDidMount()
{
  fetch(baseUrl+'/upload/display')
  .then(res=>res.json())
  .then(data=>{
      this.setState({questions:data})
  })
  .catch(err=>console.log(err))

}



  render() {

     const showquestion=this.state.questions.map((item)=>{
       return(
         <div>
           <p>{item.message}</p>
           <img src={item.img} alt=""/>
          
           <div className="col-12 col-md-9">
                    <LocalForm onSubmit={(values) => this.handleSubmit({values,item})}>
                                  <Row className="form-group" >
                                        <Label htmlFor="state" >State </Label>
                                            <Control.select model=".state" id="state" name="state"
                                                placeholder="state"
                                                className="form-control"  
                                                defaultValue={item.state}
                                                > 
                                              <option label="true" value="true">false</option>
                                              <option label="false" value="false" >false</option>

                                                </Control.select>
                                  </Row>

                                  <Row className="form-group">
                               
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                             
                                    </Row>

                           </LocalForm>     
                           </div>

                           <div className="col-12 col-md-9">

                    <LocalForm onSubmit={(values) => this.handleComment({values,item})}>
                                 
                    <Row className="form-group">
                            <Label htmlFor="character" >Comment</Label>
                                
                                    <Control.text model=".comment" id="comment" name="comment"
                                        placeholder="size:small"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(5)
                                        }}
                                        />
                                  <Errors
                                        className="text-danger"
                                        model=".comment"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be equal to 5 numbers'
                                        }}
                                     />
                               </Row>

                                  <Row className="form-group">
                               
                                    <Button type="submit" color="primary">
                                      Comment
                                    </Button>
                             
                                    </Row>
                                    
                           </LocalForm>     
                           </div>
         </div>
       )
     })

    return (
      <div>
          <h2>Questions</h2>
          <Link to={`/helloinsert`} >
               <Button  >Insert Page</Button>
         </Link>    
         {showquestion}
      </div>
    );
  }
}
export default Question;
