import React from "react";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
  return (
    <div>
      <Main />
      <Row rowID='1' title="UpComing" fetchURL={requests.requestUpcoming} />
      <Row rowID='2'title="Horror" fetchURL={requests.requestHorror} />
      <Row rowID='3'title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID='4'title="TopRated" fetchURL={requests.requestTopRated} />
      <Row rowID='5'title="TopRated" fetchURL={requests.requestTopRated} />
      <Row rowID='6'title="Popular" fetchURL={requests.requestPopular} />
    </div>
  );
};

export default Home;
