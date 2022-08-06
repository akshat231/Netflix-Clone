import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./req";
import Banner from "./Banner";
import Nav from "./Nav";
import  './App.css'
import './Row.css'


function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Trending NOW" fetchUrl={requests.fetchTrending} isLargeRow/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchTopActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchTopComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchTopHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchTopRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchTopDocumentaries} />
    </div>
  );
}

export default App;
