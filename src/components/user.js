import React,{Component} from 'react';
import { Breadcrumb, BreadcrumbItem,
    Button, Row, Col, Label } from 'reactstrap';
    import { Link } from 'react-router-dom';

    import {baseUrl} from '../baseUrl';
    import { useHistory } from 'react-router-dom';


import { Control, LocalForm, Errors } from 'react-redux-form';
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


const User = () => {
    const history = useHistory();

    const handleClick = (values) => {
        if(values.username=='U'&&values.password=='R')
        history.push("/insert");
        else
        console.log("Not valid")
    }

    return (
        <div>
            
            <div className="container">
                <div className="row row-content">
                  
                    <div className="col-12 col-md-9">
                    <LocalForm onSubmit={(values) => handleClick(values)}>
                            <Row className="form-group">
                                <Label htmlFor="username"> UserName</Label>
                                
                                    <Control.text model=".username" id="username" name="username"
                                        placeholder="UserName"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(1), maxLength: maxLength(18)
                                        }}
                                        />
                                        <Errors
                                        className="text-danger"
                                        model=".username"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 1 characters',
                                            maxLength: 'Must be 18 characters or less'
                                        }}
                                     />
                               </Row>
                            
                            <Row className="form-group">
                            <Label htmlFor="password" >Password</Label>
                                
                                    <Control.text model=".password" id="password" name="password"
                                        placeholder="password"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(1)
                                        }}
                                        />
                                  <Errors
                                        className="text-danger"
                                        model=".password"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be equal to 10 numbers'
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
               </div>

               </div>
      
        </div>
    );
}


   

   

   


export default User;
