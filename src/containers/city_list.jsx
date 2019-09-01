import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import City from '../containers/city';
import setCities from '../actions';

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setCities },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }

  render() {
    return (
      <div className="cities">
        {this.props.cities.map(city => <City name={city.name} key={city.name} />)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
