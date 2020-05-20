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

                                
                <footer class="page-footer font-small blue pt-4" style={{textAlign:"center", paddingLeft:'30%'}}>
                    <div class="container-fluid text-center text-md-left">
                        <div class="row">
                            <div class="col-md-6 mt-md-0 mt-3" style={{textAlign:"center", paddingRight:'0%'}}>
                                <h5 class="text-uppercase">Dispositivos de almacenamiento de entrada y salida.</h5>
                                <p>Proyecto final del profesor Carlos Saucedo</p>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright text-center py-3" style={{textAlign:"center", paddingRight:'50%'}}>© 2020 Copyright:
                        <p>UNAM_FI</p> 
                    </div>
                </footer>
            </div>
        )
    }
}

export default Home;