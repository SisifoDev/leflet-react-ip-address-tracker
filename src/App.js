import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Map from "./components/Map";

import axios from "axios";

import imgUrl from "./img/pattern-bg.png";

function App() {
  const [ip, setIp] = useState("186.84.22.45");
  const [ipData, setIpData] = useState({});

  useEffect(() => {
    const consultaAPI = async () => {
      const consulta = await axios(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_4VNcckW5Q78xcqCefuOL0Y3vn20m8&ipAddress=${ip}`
      );
      setIpData(consulta.data);
      console.log(consulta.data);
    };
    consultaAPI();
  }, [ip]);
  // let loading = "";
  // if (isObjEmpty(ipData)) {
  //   return (loading = <h1>Loading...</h1>);
  // } else {
  //   return (loading = <h1>Data cargada</h1>);
  // }

  function isObjEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }

    return true;
  }

  return (
    <>
      <Main>
        <Search>
          <Title>IP Address Tracker</Title>
          <SearchWrapper>
            <input type="text" placeholder="Enter IP Address" />
          </SearchWrapper>
        </Search>

        {
          /* <Map /> */
          isObjEmpty(ipData) ? (
            <h3>No data</h3>
          ) : (
            <Map
              lng={`${ipData.location.lng}`}
              lat={`${ipData.location.lat}`}
              data1={`${ipData.ip}`}
              data2={`${ipData.location.city}, ${ipData.location.region}, ${ipData.location.country}`}
            />
          )
        }
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
  width: 100%;
  display: flex;
  flex-direction: column;

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
  width: 327px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 5px;
  margin-top: 29px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  input {
    width: 100%;
    height: 100%;
  }
`;

const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;
