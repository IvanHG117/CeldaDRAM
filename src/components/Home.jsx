import React, { Component } from "react";
import Inicio from './Inicio'
import { NavbarBrand, Navbar,ListGroupItem, ListGroup } from "reactstrap";
import escudo from "../img/escudo.png"
//import 'bootstrap/dist/css/bootstrap.css'

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href='#'>PROYECTO FINAL</NavbarBrand>
                    <img src={escudo} width="30" height="30" alt=""></img>
                    
                </Navbar>
                <br/>
                <h1 style={{textAlign:'center'}} >Celda DRAM</h1>
                <Inicio />
                
                
                <div>  
                <ListGroup style={{width:"70%", paddingLeft:"30%", paddingBottom:"30px" , textAlign:'center'}} >
                    <ListGroupItem color="success">Chávez García Oscar Daniel </ListGroupItem>
                    <ListGroupItem color="info">González Gutiérrez Luis Manuel</ListGroupItem>
                    <ListGroupItem color="warning">González Quintana Narciso Yael</ListGroupItem>
                    <ListGroupItem color="danger">Hernández García Ivan Alejandro</ListGroupItem>
                </ListGroup>
                </div>
            </div>
        )
    }
}

export default Home;