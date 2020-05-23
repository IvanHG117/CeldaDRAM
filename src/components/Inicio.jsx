import React from "react"
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Form, FormGroup, Label, Input, FormText, Table } from "reactstrap"
import axios from 'axios';
// import { Image} from 'react-native'
import Select from 'react-select'
import ac from "../img/ac.jpeg"
//import a000 from "../img/a000.jpg"
//import a001 from "../img/a001.jpg"
//import a01Xa from "../img/a01Xa.jpg"
//import a01Xb from "../img/a01Xb.jpg"
//import a11Xa from "../img/a11Xa.jpg"
// import a11Xb from "../img/a11Xb.jpg"
//import a100 from "../img/a100.jpg"
//import a101 from "../img/a101.jpg"

const a01Xa = "https://media.giphy.com/media/W5ZmLV1eaVp2Yb4IfY/giphy.gif"
const a101 = "https://media.giphy.com/media/Q80FWZBl1zfsPpvvzp/giphy.gif"
const a000 = "https://media.giphy.com/media/hvS8hyFBRKNEYg6pTz/giphy.gif"
const a01Xb = "https://media.giphy.com/media/hTO7bXiouwML7wewbh/giphy.gif"
const a11Xa = "https://media.giphy.com/media/VJfro2wpfw2cUejEhL/giphy.gif"
const a001= "https://media.giphy.com/media/QW3p7qK0AcBbEglGK8/giphy.gif"
const a11Xb = "https://media.giphy.com/media/ie79JsKWvRnfwewU4M/giphy.gif"
const a100 = "https://media.giphy.com/media/U3guJcXBggrqdWs3te/giphy.gif"

const optionsDin = [
      { value: 0, label: '0' },
      { value: 1, label: '1' },
      ]
const optionsRefresh = [
      { value: 0, label: '0' },
      { value: 1, label: '1' },
      ]

const optionsRW = [
      { value: 0, label: '0' },
      { value: 1, label: '1' },
      ]

const optionsCelda = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    ]

const optionsdout= [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    ]


class Inicio extends React.Component {
    // _is_Mounted = false;
    constructor(props) {
        super(props)
        this.state = {
            celdas: [],
            row:0,
            col:0,
            /* celdain:null, 
            refresh:0,
            rw:0
            */
        }
    }

    /* 
    componentDidMount() {
        setInterval(this.resetState, 10000); 
        this.resetState();
    }

    componentWillUnmount() {
        this.resetState();
    }

    getFLR = () => {
        var url = 'http://127.0.0.1:8000/CeldaView//'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ celdas: data.results })
                console.log(this.state.celdas)
            })
            
    }

    resetState = () => {
        this.getFLR();
    }
    */

    buffer1 = (enable, A) => {
        console.log('enable, A')
        console.log('buffer1', enable, A)
        if(enable == 1){
            console.log('z')
            //this.setState({celda: A})
        }
        else {
            console.log('----',A)
            this.setState({celda: A})
            console.log('*********')
            console.log(this.state.celda)
        }
    }   
    
    buffer2 = (enable) => {
        if(enable == 1 ){
            console.log('..............1', this.state.celda)
            this.setState({dout: this.state.celda})
            console.log(this.state.dout)
        }
        /* else{
            console.log('..............0', this.state.celda)
            this.setState({dout: this.state.celda})
            console.log(this.state.dout)
        } */
    }

    buffer3 = (refresh) => {
        console.log('en buffer3')
        console.log(refresh)
        if(refresh == 0){
            this.setState({celda:0})
        }
    }

    state= {
        celdain:0,
        refresh: 0,
        rw: 0,
        celda: 0,
        dout:0,
        auxIn:0,
        axuRW:0,
        auxRefresh:0
    }

    DinChange = celdain =>{
        console.log('*****celdain')
        this.setState({celdain})
        if(this.state.rw == null){
            const aux = 0
            this.setState({auxIn: 0})
            console.log('aux, celdain.value')
            console.log(aux, celdain.value)
            this.buffer1( aux, celdain.value)
        }
        else {
            this.setState({celdain: celdain})
            this.setState({auxIn: celdain.value})
            console.log('auxIn', this.state.auxIn)
            console.log('this.state.rw.value, this.state.celdain.value')
            console.log(this.state.rw.value)
            console.log(celdain.value)
            this.buffer1(this.state.rw.value, celdain.value)
        }
    }

    refreshChange = refresh =>{
        console.log('*****hi refresh')
        this.setState({refresh})
        if(refresh.value == 0){
            this.setState({auxRefresh:0})
        }
        else {
            this.setState({auxRefresh:1})
        }
        this.buffer3(refresh.value)
        console.log(refresh)
    }

    rwChange = rw =>{
        console.log('*****hi rw')
        this.setState({rw})
        if(this.state.celdain == null){
            console.log('en el if')
            const aux2 = 0
            //this.setState({axuRW:0})
            console.log('auxRW', this.state.axuRW)
            console.log('rw.value,auz2')
            console.log(rw.value, aux2)
            this.buffer1(rw.value, aux2)
            this.buffer2(rw.value)
        }
        else{
            console.log('en el else')
            console.log(rw)
            this.setState({rw})
            if (rw.value == 0){
                this.setState({axuRW: 0})
                console.log('auxRW', this.state.axuRW)
            }
            else {
                this.setState({axuRW: 1})
                console.log('auxRW', this.state.axuRW)
            }
            
            console.log('rw.value,this.state.celdain.value')
            console.log(rw.value,this.state.celdain.value)
            this.buffer1(rw.value, this.state.celdain.value)
            this.buffer2(rw.value)
        }
    }

    render() {
        const {celdain} = this.state;
        const {refresh} = this.state;
        const {rw} = this.state;
        return (
            <div className="Container" style={{width:'80%', margin:'20px', padding:'20px', paddingLeft:'30%', color:"white"}} > 
                <Table striped style={{width:'500px'}}>
                    <tbody>
                        <tr>
                            <th>
                                <Label>Refresh </Label>
                                <Select 
                                    value={refresh}
                                    onChange={this.refreshChange}
                                    options={optionsRefresh} 
                                    defaultValue={optionsRefresh[0]}
                                />
                                <Label>R/~W </Label>
                                <Select 
                                    value={rw}
                                    onChange={this.rwChange}
                                    options={optionsRW} 
                                    defaultValue={optionsRW[0]}
                                />
                                <Label>Din </Label>
                                <Select 
                                    value={celdain}
                                    onChange={this.DinChange}
                                    options={optionsDin} 
                                    defaultValue={optionsDin[0]}
                                    
                                />
                            </th>
                            <th>
                              
                                { !this.state.auxRefresh ?
                                    !this.state.axuRW ?
                                        this.state.auxIn ? <CardImg top width="300px" 
                                        src={a001}
                                        style={{marginTop:"10px"}} alt="Card image cap" />: '':'' :'' }
                                { !this.state.auxRefresh ?
                                    !this.state.axuRW ?
                                        !this.state.auxIn ? <CardImg top width="300px" 
                                        src={a000}
                                        style={{marginTop:"10px"}} alt="Card image cap" />: '':'' :'' }
                                { !this.state.auxRefresh ?
                                    this.state.axuRW ?
                                        !this.state.celda ? <CardImg top width="300px" 
                                        src={a01Xa}
                                        style={{marginTop:"10px"}} alt="Card image cap" />: '':'' :'' }
                                { !this.state.auxRefresh ?
                                    this.state.axuRW ?
                                        this.state.celda ? <CardImg top width="300px" 
                                        src={a01Xb}
                                        style={{marginTop:"10px"}} alt="Card image cap" />: '':'' :'' }
                                { this.state.auxRefresh ?
                                    this.state.axuRW ?
                                        !this.state.celda ? <CardImg top width="300px" 
                                        src={a11Xa}
                                        style={{marginTop:"10px"}} alt="Card image cap" />: '':'' :'' }
                                { this.state.auxRefresh ?
                                    this.state.axuRW ?
                                        this.state.celda ? <CardImg top width="300px" 
                                        src={a11Xb}
                                        style={{marginTop:"10px"}} alt="Card image cap" />: '':'' :'' }

                                { this.state.auxRefresh ?
                                    !this.state.axuRW ?
                                        this.state.auxIn ? <CardImg top width="300px" 
                                        src={a101}
                                        style={{marginTop:"10px"}} alt="Card image cap" />: '':'' :'' }
                                { this.state.auxRefresh ?
                                    !this.state.axuRW ?
                                        !this.state.auxIn ? <CardImg top width="300px" 
                                        src={a100}
                                        style={{marginTop:"10px"}} alt="Card image cap" />: '':'' :'' }
                            </th>
                        </tr>
                        <tr style={{color:"white"}}>
                            <th><p>Celda {this.state.celda} </p>
                        </th>
                            <th><p>DOUT {this.state.dout ? '1':'0'}</p></th>
                        </tr>
                    </tbody>
                </Table>
                
                        
                      
                    
            </div>
        );
    }
}

export default Inicio;