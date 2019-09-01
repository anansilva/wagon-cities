import React, { Component } from 'react';
import City from '../containers/city';

class CityList extends Component {
  render() {
    return (
      <div className="cities">
        {this.props.cities.map(city => <City name={city.name} key={city.name} />)}
      </div>
    )
  }
}

export default CityList;
