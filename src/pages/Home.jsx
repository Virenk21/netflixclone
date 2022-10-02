import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <div>
        <Main />
        <Row title='UpComing' fetchURL={requests.requestUpcoming} />
        <Row title='Horror' fetchURL={requests.requestHorror} />
        <Row title='Trending' fetchURL={requests.requestTrending} />
        <Row title='TopRated' fetchURL={requests.requestTopRated} />
        <Row title='TopRated' fetchURL={requests.requestTopRated} />
        <Row title='Popular' fetchURL={requests.requestPopular} />
    </div>
  )
}

export default Home