import { useEffect, useState } from "react";
import axios from "axios";
import Config from "react-native-config";

function useMarvelData(parameter, apiType) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const publicKey = Config.PUBLIC_KEY;
  const hash = Config.HASH;
  const ts = Config.T;
  const url = Config.URL;

  useEffect(() => {
    setIsLoading(true);
    async function fetchMarvel() {
      try {
        const fetchData = `${url}/${parameter}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        const fetchCharacter = `${url}/${parameter}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
        const response = await axios.get(
          apiType === "character" ? fetchCharacter : fetchData
        );
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

  return { data, error, isLoading };
}

export default useMarvelData;
