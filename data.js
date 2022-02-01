import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import PropTypes from 'prop-types';
import axios from "axios";

class Student extends Component {
    constructor(props){
        super(props);
            this.state = {
                data:[],
            };
        }
    }
    componentDidMount() {
        axios.get("https://picsum.photos/v2/list").
            then(response => {this.setState({ data: response.data});} ).
            catch(error => console.log(error));
    }

  render() {

    return (
        
            <div id="control-panel" className="col-sm-4 col-lg-3 clearfix">
            <h2>Student Detail</h2>

            <hr/>
            {this.state.data.map((data, id) => {
                <div className="col-xs-6 col-sm-12">
                    <div className="panel panel-default">
                    <div className="panel-body" id="options-panel">
                        <div>
                        <h4>Author Name</h4>
                        
                         <h1>{data.author}</h1>
                        </div>
                        <div>
                        <h4>Last Name</h4>
                         <h1>{props.lastName}</h1>
                        
                        </div>
                        <div>
                        <h4>Type</h4>
                         <h1>{props.type}</h1>
                      
                        </div>
                    </div>
                    </div>
                </div>
                })}
                </div>
        )
  
}

export default Student;