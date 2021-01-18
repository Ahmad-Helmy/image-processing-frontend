import React, { Component } from 'react';
import InputImage from './components/input-image';
import Nav from './components/nav';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HistEq from './components/hist-eq';
import SobleAndLablace from './components/soble-and-lablace';
import Fourier from './components/fourier';
import SaltAndPepper from './components/salt-and-pepper';
import Periodic from './components/periodic';
import Welcom from './components/welcom';

class App extends Component {
  state={
    imageUploaded:false
  }
  handleUpload=(flag)=>{
    this.setState({imageUploaded:flag})
  }
  render(){
    return (
      <React.Fragment>
        <InputImage onUpload={this.handleUpload} />
        {this.state.imageUploaded &&(<React.Fragment>
          <Nav/>
          <Switch>
          <Route path="/welcom" component={Welcom} />
          <Route path="/histogram-equalization" component={HistEq} />
          <Route path="/soble-and-laplace" component={SobleAndLablace} />
          <Route path="/fourier" component={Fourier} />
          <Route path="/sAndP" component={SaltAndPepper} />
          <Route path="/periodic" component={Periodic} />
        </Switch>
        </React.Fragment>)}
      </React.Fragment>
    );
  }
}

export default App;
