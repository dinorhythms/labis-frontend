import axios from 'axios';

const serverRequest = () => {

  const axiosInst = axios.create({
  });

  axiosInst.interceptors.request.use(async function(config) {
    return config;
  }, function(error) {
    return Promise.reject(error);
  });

  return axiosInst;

}

export default serverRequest;
