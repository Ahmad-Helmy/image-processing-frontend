import React, { Component } from "react";
import { getFourier, imageUrlPrefix } from "../services/image-service";

class Fourier extends Component {
  state = {
    url: "",
  };
  componentDidMount() {
    getFourier().then((res) => {
      this.setState({ url: imageUrlPrefix() + res.data.img });
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container my-5">
          <div className="row" style={{ minHeight: "200px" }}>
            <div className="col-3"></div>
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

export default Fourier;
