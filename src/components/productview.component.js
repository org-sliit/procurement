import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';
import {Link} from "react-router-dom";

export default class productview extends Component {

    constructor(props) {

        super(props);

        this.addtocart=this.addtocart.bind(this);
        this.onchangeqty=this.onchangeqty.bind(this);


        this.state = {

            pid: '',
            pname: '',
            pbprice: '',
            psprice: '',
            pcategory: '',
            pqty: '',
            description:'',
            sqty:'',
            val:''
        }
        axios.get('http://localhost:4000/business/edit/'+this.props.match.params.id)
            .then(response => {
                console.log(response.data.pid)
                //alert(this.props.match.params.id)

                this.setState({

                    pid: response.data.pid,
                    pname: response.data.pname,
                    pbprice: response.data.pbprice,
                    psprice: response.data.psprice,
                    pcategory: response.data.pcategory,
                    pqty: response.data.pqty,
                    description:response.data.description


                })
            })
            .catch(function (error) {
                console.log(error);
            })


    }

    addtocart(e){

        const obj={

            pid: this.state.pid,
            pname:this.state.pname,

            psprice:this.state.psprice,
            pcategory: this.state.pcategory,
            pqty: this.state.sqty,
            description:this.state.description
        }

        axios.post('http://localhost:4000/business/cart', obj)
            .then(res => console.log(res.data));
    }

    onchangeqty(e){

        this.setState({

            sqty:e.target.value
        })

    }

    render(){


        return (

            <div>


            <h1>Product &nbsp; :&nbsp;{this.state.pname}</h1>
                <h6>Item Description &nbsp; :&nbsp;{this.state.description}</h6>
                <h6>Available Quantity &nbsp; :&nbsp;{this.state.pname}</h6><br/>
                <h4>Price &nbsp; &nbsp; {this.state.psprice} </h4>


                <div className="form-group">
                    <label>QTY</label>
                    <input type="number"
                              className="form-control mx-sm-3" aria-describedby="passwordHelpInline"
                              value={this.state.sqty}
                              onChange={this.onchangeqty}
                />
                </div>

                <td> <Link to onClick={this.addtocart} className="btn btn-primary">Add To Cart</Link></td>


            </div>
        )
    }


}