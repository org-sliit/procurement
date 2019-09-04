//View Credit card payment Form

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class Edit extends Component {
    constructor(props) {


        super(props);

        this.state={

            items:[],
            x:0
        }


    }


    componentDidMount() {

        axios.get('http://localhost:4000/business/items')
            .then(response => {

                console.log(response.data)
                this.setState({
                    items: response.data }

                );
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render(){

        this.state.x=0;

        return(
            <div>

                <h3 align="center">Bill Information</h3><br/>

                <h5 align="center">Name        :{this.props.match.params.name}</h5>


                <h5 align="center">Address        :{this.props.match.params.address}</h5><br/>


                {



                    this.state.items.map(obj=>{



                        //let y=parseFloat(this.state.x);
                        //let z=obj.psprice;
                        this.state.x= this.state.x+ (parseFloat(obj.psprice))*obj.pqty



                        return(
                            <div align="center">
                                <p >Product: &nbsp;  {obj.pname}</p>
                                <p>ID: &nbsp; {obj.pid}</p>
                                <p> Quantity: &nbsp; {obj.pqty}</p>
                                <p> Price: &nbsp; {obj.psprice}</p>
                                <br/>



                            </div>
                        )})

                }
                <h4> Sum                    : &nbsp; {this.state.x}</h4><br/>



            </div>


        )

}


}