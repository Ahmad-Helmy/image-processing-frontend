import React, { Component } from "react";

import { getSobleAndLablace, imageUrlPrefix } from "../services/image-service";
class SobleAndLablace extends Component {
  state = {
    url: "",
  };
  componentDidMount() {
    getSobleAndLablace("sobel").then((res) => {
      this.setState({ url: imageUrlPrefix() + res.data.img });
    });
  }
  handleChange = (e) => {
    getSobleAndLablace(e.target.value).then((res) => {
      this.setState({ url: imageUrlPrefix() + res.data.img });
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container my-5">
          <div className="row mb-2">
            <div className="col-3"></div>
            <div className="col-6">
              <select
                onChange={this.handleChange}
                className="w-100"
                name="mode"
                id="mode"
              >
                <option value="sobel" selected>
                  Sobel
                </option>
                <option value="laplace">Laplace</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6">
              {this.state.url && (
                <img className="w-100" src={this.state.url} alt="" />
              )}
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SobleAndLablace;
