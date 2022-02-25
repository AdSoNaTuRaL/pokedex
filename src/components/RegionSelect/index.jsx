import React, { useState, useEffect } from "react";
import "./styles.css";
import regionDexName from "../../functions/regionDexName";
import api from "../../services/api";

const RegionSelect = ({ regionChange, regionValue }) => {
  const [regions, setRegions] = useState([]);

  const api_call = async () => {
    const regionRequest = api.get("pokedex/");
    const regionResponse = await regionRequest;
    setRegions(regionResponse.data.results);
  };

  useEffect(() => {
    api_call();
  }, []);

  const getRegionId = (url) => {
    let regionId = url.replace(
      /https:\/\/pokeapi.co\/api\/v2\/pokedex\/|\//g,
      ""
    );
    return regionId;
  };

  return (
    <>
      <div className="select-container">
        <select
          className="regions-options"
          value={regionValue}
          onChange={regionChange}
        >
          {regions &&
            regions.map((region) => {
              return (
                <option
                  value={getRegionId(region.url)}
                  key={getRegionId(region.url)}
                >
                  {regionDexName(region.name)}
                </option>
              );
            })}
        </select>
      </div>
    </>
  );
};

export default RegionSelect;
