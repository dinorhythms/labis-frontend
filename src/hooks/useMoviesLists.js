import { useEffect, useRef, useState } from "react";
import serverRequest from "../utils/serverRequest";

const useMoviesLists = (url) => {
	const [isLoading, setIsLoading] = useState(true);
	const [movies, setMovies] = useState();
	const isMounted = useRef(false);
	
  useEffect(() => {
    isMounted.current = true;
    const getAppointment = async () => {
      try {
        setIsLoading(true);
        const endpoint = `${process.env.REACT_APP_IMDB_URL}${url}?api_key=${process.env.REACT_APP_IMDB_API}`;
        const response = await serverRequest().get(endpoint);
        if (isMounted.current) {
          setMovies(response.data.results)
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted.current) {
          setIsLoading(false);
        }
      }
    };
    getAppointment();
    return () => {
      isMounted.current = false;
    };
  }, [url]);

  return { isLoading, movies };
};

export default useMoviesLists;
