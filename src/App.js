import React, { useState, useEffect } from "react";
import styled from "styled-components";

import axios from "axios";

import imgUrl from "./img/pattern-bg.png";
import MapView from "./components/MapView";
import Button from "./components/Button";
import Arrow from "./components/Arrow";

function App() {
  const [ip, setIp] = useState("");
  const [ipData, setIpData] = useState({});
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const consultaAPI = async () => {
      const consulta = await axios(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_nESUW1ewhrZmgjNOxSERVgc28c0NE&ipAddress=${ip}`
      );
      setIpData(consulta.data);
      console.log(consulta.data);
    };
    consultaAPI();
  }, [ip]);

  function isObjEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }

    return true;
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIp(inputValue);
  };

  return (
    <>
      <Main>
        <Search>
          <Title>IP Address Tracker</Title>

          <Form onSubmit={handleSubmit}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Search for any IP address or domain"
            />
            <Button onClick={handleSubmit}>
              <Arrow />
            </Button>
          </Form>
        </Search>

        <div id="map">
          {
            /* <Map /> */
            isObjEmpty(ipData) ? (
              <h3>Chargin...</h3>
            ) : (
              <MapView
                lng={`${ipData.location.lng}`}
                lat={`${ipData.location.lat}`}
                data1={`${ipData.ip}`}
                data2={`${ipData.location.city}, ${ipData.location.region}, ${ipData.location.country}`}
              />
            )
          }
        </div>
      </Main>

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="/">Héctor Manuel Perdomo Vargas</a>.
      </div>
    </>
  );
}

export default App;

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Search = styled.section`
  height: 300px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  background-image: url(${imgUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 26px;
`;

const SearchWrapper = styled.div`
  width: 100%;

  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  margin-top: 29px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 15px 0 0 15px;
    margin-left: 24px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    outline: none;
    color: #2c2c2c;
  }
`;

const Form = styled.form`
width: 100%;

height: 58px;
display: flex;
justify-content: center;
align-items: center;
background-color: #fff;
border-radius: 15px;
margin-top: 29px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

input {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 15px 0 0 15px;
    margin-left: 24px;
    font-family: Rubik;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    outline: none;
    color: #2c2c2c;

`;
