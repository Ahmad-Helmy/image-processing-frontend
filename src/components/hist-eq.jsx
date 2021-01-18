import React, { Component } from "react";
import {
  getHistogramEqualization,
  imageUrlPrefix,
} from "../services/image-service";
import PlotChart from "./plot-chart";

class HistEq extends Component {
  state = {
    url: "",
    hist: [],
  };
  componentDidMount() {
    getHistogramEqualization().then((res) => {
      const hist = [];
      for (let i = 0; i < 256; i++) {
        hist.push([i, res.data.hist[i]]);
      }
      console.log(res.data.img);
      this.setState({
        url: `${imageUrlPrefix()}${res.data.img}`,
        hist,
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        <div className="container my-5">
          <div className="row" style={{ minHeight: "200px" }}>
            <div className="col-6">
              {this.state.url && (
                <img className="w-100" src={this.state.url} alt="" />
              )}
            </div>
            <div className="col-6">
              {this.state.hist.length > 0 && (
                <PlotChart data={[this.state.hist]} />
              )}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default HistEq;
