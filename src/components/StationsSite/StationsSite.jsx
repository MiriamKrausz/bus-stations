import './StationsSite.css'
import SingleStation from './../SingleStation/SingleStation'
import { stations } from '../../data/Stations'
import React, { useState, useEffect } from 'react';


function StationsSite() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedLine, setSelectedLine] = useState('');
  const [selectedStreet, setSelectedStreet] = useState('');
  const [filteredStation, setFilteredStation] = useState(stations)

  useEffect(() => {
    if (selectedCity !== '') {
      var filteredStations = stations.filter((p) => p.city === selectedCity)
      if (selectedStreet !== '') {
        filteredStations = filteredStations.filter((s) =>
          s.street === selectedStreet)
      }
      if (selectedLine !== '') {
        filteredStations= filteredStations.filter(station => station.lines.includes(selectedLine));
      }
      console.log(filteredStations)
      setFilteredStation(filteredStations);
    }
    else if (selectedStreet !== '') {
      filteredStations = stations.filter((p) => p.street === selectedStreet)
      if (selectedCity !== '') {
        filteredStations = filteredStations.filter((s) =>
          s.city === selectedCity)
      }
      if (selectedLine !== '') {
        filteredStations = filteredStations.filter(station => station.lines.includes(selectedLine))
      }
      console.log(filteredStations)
      setFilteredStation(filteredStations);
    }
    else if (selectedLine !== '') {
      var filteredStations = stations.filter(station => station.lines.includes(selectedLine))
      if (selectedStreet !== '') {
        filteredStations = filteredStations.filter((s) =>
          s.street === selectedStreet)
      }
      if (selectedCity !== '') {
        filteredStations.filter((s) =>
          s.city === selectedCity)
      }
      console.log(filteredStations)
      setFilteredStation(filteredStations);
    }
  }, [selectedCity, selectedLine, selectedStreet]);

  const filterC = (event) => {
    setSelectedCity(event.target.value);
  }
  const filterS = (event) => {
    setSelectedStreet(event.target.value);
  }
  const filterL = (event) => {
    setSelectedLine(event.target.value);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    // Update every second (60000 milliseconds)
    // Clean up the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <div className="clock-container">
        <h1 className="clock-title">Current Time:</h1>
        <p className="clock-time">{currentTime.toLocaleTimeString()}</p>
      </div>
      <h1>Bus-station list</h1>
      <label >Choose a city:</label>
      <select id="city" name="city" value={selectedCity} onChange={filterC}>
        <option></option>
        <option value="Jerusalem">Jerusalem</option>
        <option value="Bnei Brak">Bnei Brak</option>
        <option value="Afula">Afula</option>
      </select>
      <br />
      <label >Choose a street:</label>
      <select id="street" name="street" value={selectedStreet} onChange={filterS}>
        <option></option>
        <option value="Hazon Ish">Hazon Ish</option>
        <option value="Flower">Flower</option>
        <option value="Meltzer">Meltzer</option>
        <option value="Tzfania">Tzfania</option>
        <option value="Shamgar">Shamgar</option>
      </select>
      <br/>
      <label >Choose a Line:</label>
      <select id="Line" name="Line" value={selectedLine} onChange={filterL}>
        <option></option>
        <option value="5">5</option>
        <option value="12">12</option>
        <option value="4">4</option>
        <option value="6">6</option>
        <option value="94">94</option>
        <option value="54">54</option>
        <option value="7">7</option>
        <option value="11">11</option>
      </select>
      {filteredStation.map((item, index) => (
        <SingleStation key={index} station={item} ></SingleStation>
      ))}
    </>
  )
}
export default StationsSite



