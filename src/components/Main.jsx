import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Requests';

const Main = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
      });
  },[]);



  return (
    <div>Main</div>
      
  )
}

export default Main