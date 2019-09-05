import cities from '../../data/cities';

const citiesReducer = (state = null, action) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'CITY_SELECTED':
      return state;
    default:
      return cities;
  }
};

export default citiesReducer;
