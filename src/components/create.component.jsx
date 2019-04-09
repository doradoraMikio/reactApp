import React, { Component } from "react";

export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this)
    this.onchangeBusinessName = this.onchangeBusinessName.bind(this)
    this.onChangeGstNumber = this.onChangeGstNumber.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      person_name: "",
      business_name: "",
      business_gst_number: ""
    };
  }

  onChangePersonName(event) {
      this.setState({
          person_name : event.target.value
      })
  }

  onchangeBusinessName(event) {
      this.setState({
              business_name : event.target.value
          })
  }
  
  onChangeGstNumber(event) {
      this.setState({
          business_gst_number : event.target.value
      })
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(`The values are ${this.state.person_name}, ${this.state.business_name}, and ${this.state.business_gst_number}`)
    this.setState({
      person_name: '',
      business_name: '',
      business_gst_number: ''
    })
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add new Business</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Person Name: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Add Business Name: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Add GST Number: </label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Register Business"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
