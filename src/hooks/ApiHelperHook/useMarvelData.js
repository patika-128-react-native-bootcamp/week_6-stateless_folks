import {useEffect, useState} from 'react';
import axios from 'axios';
import Config from 'react-native-config';

function useMarvelData(parameter) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const publicKey = Config.PUBLIC_KEY;
  const hash = Config.HASH;
  const ts = Config.T; // timestamp default maybe change later
  const url = Config.URL;

  //example url
  // http://gateway.marvel.com/v1/public/comics?ts=1&apikey=1234&hash=ffd275c5130566a2916217b101f26150
  useEffect(() => {
    setIsLoading(true);
    async function fetchMarvel() {
      try {
        console.log('response');
        const fetchData = `${url}/${parameter}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        console.log(fetchData);
        const response = await axios.get(fetchData);
        //const res = await response.json();
        console.log('response1');
        setError(null);

        setData(response.data);
        setIsLoading(false);
      } catch (err) {
        setData(null);
        setError(err);
        setIsLoading(false);
      }
    }

    fetchMarvel();
  }, [parameter]);

  return {data, error, isLoading};
}

export default useMarvelData;
