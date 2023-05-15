import { useState, useEffect } from 'react';
import axios from 'axios';

const useRequest = (url) => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    errorMsg: ''
  });

  useEffect(() => {
    axios.get(url)
      .then(result => {
        setState({
          data: result.data,
          loading: false,
          errorMsg: ''
        });
      })
      .catch(err => {
        console.log(err);

        setState((prev) => ({
          ...prev,
          errorMsg: 'Error loading data',
          loading: false
        }));
      });
  }, [url]);

  return state;
};

export default useRequest;
