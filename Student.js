import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import PropTypes from 'prop-types';
import axios from 'axios';

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get('https://picsum.photos/v2/list').then((response) => {
      this.setState({ data: response.data }, () => {
        console.log(this.state.data);
      });
    }).
    catch((error)=> console.log(error));
  }

  render() {
    return (
      <div id="control-panel" className="col-sm-4 col-lg-3 clearfix">
        <h2>Student Detail</h2>

        <hr />
        {this.state.data &&
          this.state.data.length > 0 &&
          Object.keys(this.state.data).map((dat, id) => (
            <div key={id}>
              <div>
                <h4>Author Name</h4>

                <h1>{this.state.data[dat].author}</h1>
              </div>
              <div>
                <h4>Width</h4>
                <h1>{this.state.data[dat].width}</h1>
              </div>
              <div>
                <h4>height</h4>
                <h1>{this.state.data[dat].height}</h1>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default Student;
