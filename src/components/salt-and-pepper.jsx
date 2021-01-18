import React, { Component } from "react";

import { getSaltAndPepper, imageUrlPrefix } from "../services/image-service";
class SaltAndPepper extends Component {
  state = {
    url: "",
    filterd: "",
    param: {
      size: 3,
      amount: 0.05,
    },
  };
  componentDidMount() {
    getSaltAndPepper(this.state.param.amount, this.state.param.size).then(
      (res) => {
        this.setState({
          url: imageUrlPrefix() + res.data.img,
          filterd: imageUrlPrefix() + res.data.filter,
        });
      }
    );
  }
  handleChange = (e) => {
    const param = { ...this.state.param };
    param[e.target.name] = e.target.value;
    this.setState({ param });
  };
  handleSubmit = (e) => {
    getSaltAndPepper(this.state.param.amount, this.state.param.size).then(
      (res) => {
        this.setState({
          url: imageUrlPrefix() + res.data.img,
          filterd: imageUrlPrefix() + res.data.filter,
        });
      }
    );
  };
  renderInputRange(label, name, min, max, step, value) {
    return (
      <React.Fragment>
        <label>{label}:</label>
        <input
          onChange={this.handleChange}
          type="range"
          name={name}
          min={min}
          max={max}
          step={step}
          value={value}
          className="mx-2"
        />
        <span className="badge badge-primary">{value}</span>
      </React.Fragment>
    );
  }
  render() {
    return (
      <React.Fragment>
        <div className="container my-5">
          <div className="row">
            <div className="col-5">
              {this.renderInputRange(
                "Mask Size",
                "size",
                0,
                20,
                1,
                this.state.param.size
              )}
            </div>
            <div className="col-5">
              {this.renderInputRange(
                "Noise Amount",
                "amount",
                0,
                1,
                0.01,
                this.state.param.amount
              )}
            </div>
            <div className="col-2">
              <button className="btn btn-success" onClick={this.handleSubmit}>
                Apply
              </button>
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-6">
              {this.state.filterd && (
                <img className="w-100" src={this.state.filterd} alt="" />
              )}
            </div>
            <div className="col-6">
              {this.state.url && (
                <img className="w-100" src={this.state.url} alt="" />
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SaltAndPepper;
