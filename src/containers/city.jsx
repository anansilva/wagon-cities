import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { setActiveCity } from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setActiveCity },
    dispatch
  );
}

class City extends Component {
  render() {
    return (
      <div className="list-group-item" onClick={() => this.props.setActiveCity(this.props.city)}>
        {this.props.city.name}
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(City);
