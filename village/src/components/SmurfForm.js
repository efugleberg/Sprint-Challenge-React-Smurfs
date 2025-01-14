import React, { Component } from 'react';
import axios from 'axios';
import './Smurfs.css';

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    const smurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    }
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => console.log('this is response', res))
    .catch(err => console.log('This is error', err));
    

    this.setState({
      name: '',
      age: '',
      height: ''
    });
    window.location.reload(true);
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button onClick={this.addSmurf} type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
