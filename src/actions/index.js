import cities from '../../data/cities';

function setCities() {
  return {
    type: 'SET_CITIES',
    payload: cities
  };
}

export default setCities;
