import React, { Component } from "react";
import {
  getPeriodic,
  imageUrlPrefix,
  maskFilter,
  selectPeriodicFilter,
} from "../services/image-service";

class Periodic extends Component {
  state = {
    url: "",
    filtered: "",
    fourier: "",
    fourierFiltered: "",
    click: 0,
    nx: 3,
    ny: 3,
    mode: "sin",
    filter: "band",
  };
  componentDidMount() {
    getPeriodic(this.state.nx, this.state.ny, this.state.mode).then((res) => {
      selectPeriodicFilter(
        this.state.filter,
        this.state.nx,
        this.state.ny
      ).then((res) => {
        this.setState({
          fourierFiltered: imageUrlPrefix() + res.data.img,
          filtered: imageUrlPrefix() + res.data.inv,
        });
      });
      this.setState({
        url: imageUrlPrefix() + res.data.img,
        fourier: imageUrlPrefix() + res.data.fourier,
      });
    });
  }
  handleClick = (e) => {
    const height = e.target.height;
    const width = e.target.width;
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    console.log(x);
    console.log(y);
    maskFilter(x, y, height, width, this.state.click).then((res) => {
      this.setState({
        fourierFiltered: imageUrlPrefix() + res.data.img,
        click: this.state.click == 0 ? 1 : 0,
        filtered: imageUrlPrefix() + res.data.inv,
      });
    });
  };
  handleNvChange = (e) => {
    const value = e.target.value >= 0 ? e.target.value : 0;
    this.setState({ [e.target.name]: value });
  };
  handleSelectChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = () => {
    getPeriodic(this.state.nx, this.state.ny, this.state.mode).then((res) => {
      selectPeriodicFilter(
        this.state.filter,
        this.state.nx,
        this.state.ny
      ).then((res) => {
        this.setState({
          fourierFiltered: imageUrlPrefix() + res.data.img,
          filtered: imageUrlPrefix() + res.data.inv,
        });
      });
      this.setState({
        url: imageUrlPrefix() + res.data.img,
        fourier: imageUrlPrefix() + res.data.fourier,
      });
    });
  };
  renderInput(label, name, value) {
    return (
      <React.Fragment>
        <label htmlFor="">{label}</label>
        <input
          className="mx-2"
          type="number"
          name={name}
          value={value}
          onChange={this.handleNvChange}
        />
      </React.Fragment>
    );
  }
  render() {
    return (
      <React.Fragment>
        <div className="container my-5">
          <div className="row">
            <div className="col-3">
              {this.renderInput("NX:", "nx", this.state.nx)}
            </div>
            <div className="col-3">
              {this.renderInput("NY:", "ny", this.state.ny)}
            </div>
            <div className="col-2">
              <label htmlFor="">func:</label>
              <select
                className="mx-2"
                onChange={this.handleSelectChange}
                name="mode"
                id="mode"
              >
                <option value="sin" selected>
                  Sin
                </option>
                <option value="cos">Cos</option>
              </select>
            </div>
            <div className="col-3">
              <label htmlFor="">Filter:</label>
              <select
                className="mx-2"
                onClick={this.handleSelectChange}
                name="filter"
                id="filter"
              >
                <option value="band">Band Reject</option>
                <option value="notch">Notch Filter</option>
                <option value="mask">Mask</option>
              </select>
            </div>
            <div className="col-1  text-center">
              <button onClick={this.handleSubmit} className="btn btn-success">
                apply
              </button>
            </div>
          </div>

          <hr />

          <div className="row my-3">
            <div className="col-6">
              {this.state.url && (
                <img className="w-100" src={this.state.url} alt="" />
              )}
            </div>
            <div className="col-6">
              {this.state.filtered && (
                <img className="w-100" src={this.state.filtered} alt="" />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              {this.state.fourier && (
                <img className="w-100" src={this.state.fourier} alt="" />
              )}
            </div>
            <div className="col-6">
              {this.state.fourierFiltered && (
                <img
                  onClick={
                    this.state.filter == "mask" ? this.handleClick : () => {}
                  }
                  className="w-100"
                  src={this.state.fourierFiltered}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Periodic;
