import { connect } from 'react-redux';
import React, { Component } from 'react';
import City from '../containers/city';

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

class CityList extends Component {
  render() {
    return (
      <div className="cities">
        {this.props.cities.map(city => <City city={city} key={city.name} />)}
      </div>
    );
  }
}

export default connect(mapStateToProps)(CityList);
