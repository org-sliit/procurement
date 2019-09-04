import React, { Component } from 'react';
import axios from 'axios';

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangepid = this.onChangepid.bind(this);
    this.onChangepname = this.onChangepname.bind(this);
    this.onChangepbprice = this.onChangepbprice.bind(this);
    this.onChangepsprice = this.onChangepsprice.bind(this);
    this.onChangepcategory = this.onChangepcategory.bind(this);
    this.onChangepqty = this.onChangepqty.bind(this);
    this.onChangedescription = this.onChangedescription.bind(this)

      this.onSubmit = this.onSubmit.bind(this);

    this.state = {

        pid:'',
        pname:'',
        pbprice:'',
            psprice:'',
            pcategory:'',
            pqty:'',
            val:'',
        description:''
    }
    }
    onChangepid(e) {
        this.setState({
            pid: e.target.value
        });
    }
    onChangepname(e) {
        this.setState({
            pname: e.target.value
        })
    }
    onChangepbprice(e) {
        this.setState({
            pbprice: e.target.value
        })
    }

    onChangepsprice(e) {
        this.setState({
            psprice: e.target.value
        })
    }

    onChangepqty(e) {
        this.setState({
            pqty: e.target.value
        })
    }

    onChangepcategory(e) {
        this.setState({
            pcategory: e.target.value
        })
    }

    onChangedescription(e){

      this.setState({

          description:e.target.value
      })
    }


    onSubmit(e) {


        e.preventDefault();






        const obj = {
            pid: this.state.pid,
            pname: this.state.pname,
            pbprice: this.state.pbprice,
            psprice:this.state.psprice,
            pqty:this.state.pqty,
            pcategory:this.state.pcategory,
            description:this.state.description


    };

        axios.get('http://localhost:4000/business/validate/'+this.state.pid)
            .then(response => {
                console.log(response.data.pname)

                this.setState({

                    val:response.data.pname
                },()=>{



                    alert("ioio")



                    if(this.state.val!='') {



                        alert("Already have this prouduct ID");

                    }


                })


                }).
        catch(function (error) {
                console.log(error);
            axios.post('http://localhost:4000/business/add', obj)
                .then(res => console.log(res.data));
            })


    this.setState({

        pid: '',
        pname: '',
        pbprice: '',
        psprice:'',
        pqty:'',
        pcategory:'',
        description:''
    })
  }

  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Add New Product</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Product ID:  </label>
                    <input
                      type="text"
                      className="form-control"
                      value={this.state.pid}
                      onChange={this.onChangepid}
                      />
                </div>
                <div className="form-group">
                    <label>Product Name: </label>
                    <input type="text"
                      className="form-control"
                      value={this.state.pname}
                      onChange={this.onChangepname}
                      />
                </div>
                <div className="form-group">
                    <label>Buying Price: </label>
                    <input type="number"
                      className="form-control"
                      value={this.state.pbprice}
                      onChange={this.onChangepbprice}
                      />
                </div>

                <div className="form-group">
                    <label>Selling Price: </label>
                    <input type="number"
                           className="form-control"
                           value={this.state.psprice}
                           onChange={this.onChangepsprice}
                    />
                </div>

                <div className="form-group">
                    <label>Description: </label>
                    <input type="text"
                           className="form-control"
                           value={this.state.description}
                           onChange={this.onChangedescription}
                    />
                </div>

                <div className="form-group">
                    <label>Category: </label>
                    <select value={this.state.value} onChange={this.onChangepcategory}>
                        <option value="x">x</option>
                        <option value="y">y</option>

                        <option value="z">z</option>
                    </select>


                </div>

                <div className="form-group">
                    <label>Quantity: </label>
                    <input type="number"
                           className="form-control"
                           value={this.state.pqty}
                           onChange={this.onChangepqty}
                    />
                </div>
                <div className="form-group">
                    <input type="submit"
                      value="Add Deails"
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}