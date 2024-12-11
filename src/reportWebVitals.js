import { getCLS, getFID, getLCP, getTTFB } from 'web-vitals';

const reportWebVitals = (callback) => {
  if (callback && typeof callback === 'function') {
    getCLS(callback);
    getFID(callback);
    getLCP(callback);
    getTTFB(callback);
  }
};

export default reportWebVitals;
