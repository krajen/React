/** @jsx React.DOM */

var React = require('react/addons');
var imgData = require('../data/imgData.js').imgData;

var ReactApp = React.createClass({

      componentDidMount: function () {
        console.log(imgData);

      },
       handleClick: function() {
        alert('Hi');
      },
      render: function () {
        return (
          <div id="container" className="banner">
            <img src={imgData.path} />
            <div className ="bottom-div">
              <div className="banner-content">

                <h1>{imgData.title}</h1>

                <div className ="banner-description">
                  <p>{imgData.tags}</p>
                </div>

                <div className="btn-section">
                  <button className="btn btn-danger btn-lg" onClick={this.handleClick}>Click Here</button> 
                  <p> (button works only when client rendering happened.) </p> 
                </div>
                
              </div>
            </div>
          </div>
          
        )
      }
  });

/* Module.exports instead of normal dom mounting */
module.exports = ReactApp;