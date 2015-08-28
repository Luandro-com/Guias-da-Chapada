'use strict';

var React = require('react'),
	Picture = React.createClass({

    render: function(){

        return (

            <div className="grid_25 instagram">
                <img src={this.props.src} />
            </div>

        );
    }
	});
module.exports = Picture;