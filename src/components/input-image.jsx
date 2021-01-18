import React, { Component } from "react";
import PlotChart from "./plot-chart";
import { clear, imageUrlPrefix, uploadImage } from "../services/image-service";
class InputImage extends Component {
  state = {
    image: null,
    url: "",
    hist: [],
  };
  componentWillUnmount() {
    clear().then();
  }
  handleChange = (e) => {
    const image = e.target.files[0];
    this.setState({ image });
  };
  handleUpload = () => {
    clear().then(() => {
      const fd = new FormData();
      fd.append("image", this.state.image, this.state.image.name);
      uploadImage(fd).then((res) => {
        const hist = [];
        for (let i = 0; i < 256; i++) {
          hist.push([i, res.data.hist[i]]);
        }
        this.props.onUpload(true);
        this.setState({
          url: `${imageUrlPrefix()}${res.data.newImage}`,
          hist,
        });
      });
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-3">
          <div className="row">
            <div className="col-12 text-center">
              <h3 htmlFor="" className="mr-3 d-inline-block text-secondary">
                Upload Image:
              </h3>
              <input
                accept=".jpeg,.jpg"
                type="file"
                name="inage"
                id="image"
                onChange={this.handleChange}
              />
              <button
                className="btn btn-primary"
                disabled={!this.state.image}
                onClick={this.handleUpload}
              >
                upload
              </button>
            </div>
          </div>

          <div className="row mt-3" style={{ minHeight: "300px" }}>
            <div className="col-6 d-flex justify-content-center align-items-end border">
              {this.state.url && (
                <img className="w-100" src={this.state.url} alt="" />
              )}
            </div>
            <div className="col-6  border" style={{ height: "300px" }}>
              {this.state.hist.length > 0 && (
                <PlotChart data={[this.state.hist]} />
              )}
            </div>
          </div>
        </div>
        <br />
      </React.Fragment>
    );
  }
}

export default InputImage;
