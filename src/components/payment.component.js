//View Credit card payment Form

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

export default class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangePersonEmail = this.onChangePersonEmail.bind(this);
        this.onChangePersonName = this.onChangePersonName.bind(this);
        this.onChangePersonaddress = this.onChangePersonaddress.bind(this);
        this.onChangeCardno         =this.onChangeCardno.bind(this);
        this.onChangePersonCvc =this.onChangePersonCvc.bind(this);
        this.onChangeExpiredate=this.onChangeExpiredate.bind(this);



        this.onSubmit = this.onSubmit.bind(this);

        this.state = {

            business: [],

            email: '',
            name:'',
            address:'',
            items: [],
            cvc:'',
            cardno:'',
            expiredate:'',
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

    onChangePersonEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePersonName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangePersonaddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeCardno(e) {
        this.setState({
            cardno: e.target.value
        });
    }

    onChangePersonCvc(e) {
        this.setState({
            cvc: e.target.value
        });
    }


    onChangeExpiredate(e) {
        this.setState({
            expiredate: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();


        this.state.items.map(mobj=>{

            const obj={

                pid:mobj.pid,
                pname:mobj.pname,
                psprice:mobj.psprice,
                pqty:mobj.pqty,
                pcategory:mobj.pcategory,
                description:mobj.description,
                pemail:this.state.email,
                name:this.state.name,
                address:this.state.address

            }

            axios.post('http://localhost:4000/business/payment',obj).then(res=>{

                console.log(res.data)
                this.props.history.push('/finalbill/'+this.state.name+'/'+this.state.email+'/'+this.state.address);
            })

        })






    }

    render() {

        this.state.x=0;

        return (



            <div style={{ marginTop: 10 }}>

                <div class="container">

                    {


                        this.state.items.map(obj=>{



                            //let y=parseFloat(this.state.x);
                            //let z=obj.psprice;
                            this.state.x= this.state.x+ (parseFloat(obj.psprice))*obj.pqty



                            return(
                                <div>
                            <p>Product: &nbsp;  {obj.pname}</p>
                                    <p>ID: &nbsp; {obj.pid}</p>
                                    <p> Quantity: &nbsp; {obj.pqty}</p>
                                    <p> Price: &nbsp; {obj.psprice}</p>
                                    <br/>



                                </div>
                                    )})

                    }

                    <h4> Sum: &nbsp; {this.state.x}</h4><br/>

                    <form>
                        <div className="form-group">
                            <label>Email </label>
                            <input
                                type="email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangePersonEmail}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Full Name </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangePersonName}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Card No </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.cardno}
                                onChange={this.onChangeCardno}
                                placeholder="**** **** **** ****"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>CVV Number </label>
                            <input
                                type="number"
                                className="form-control"
                                value={this.state.cvc}
                                onChange={this.onChangePersonCvc}
                                placeholder="***"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Expire Date </label>
                            <input
                                type="text"
                                className="form-control"
                                value={this.state.expiredate}
                                onChange={this.onChangeExpiredate}
                                placeholder="MM / YY"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Address : </label><br></br>
                            <textarea
                                   className="form-control"
                                   value={this.state.address}
                                   onChange={this.onChangePersonaddress}
                            />
                        </div>

                        <div className="form-group">
                            <Link to  onClick={this.onSubmit} className="btn btn-primary">Pay</Link>

                        </div>
                    </form>
                </div>

                <br></br>

            </div>
        )
    }
}