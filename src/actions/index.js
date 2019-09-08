export const SET_CITIES = 'SET_CITIES';
export const SET_ACTIVE_CITY = 'SET_ACTIVE_CITY';

export const setCities = () => {
  const promise = fetch('https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json').then(response => response.json());
  return {
    type: SET_CITIES,
    payload: promise
  };
};

export const setActiveCity = (city) => {
  return {
    type: SET_ACTIVE_CITY,
    payload: city
  };
};
