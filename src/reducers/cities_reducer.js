import cities from '../../data/cities';

const citiesReducer = (state = null, action) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'SET_ACTIVE_CITY':
      return state;
    default:
      return cities;
  }
};

export default citiesReducer;
