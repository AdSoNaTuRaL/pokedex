import React from "react";
import statsName from "../../functions/statsName";
import "./styles.css";
import { useTheme } from "../../contexts/Theme";
import { hectogramToKilogram } from "../../functions/hectToKg";
import { decimeterToCentimeters } from "../../functions/decToCm";

const PokeStats = ({ stats, info }) => {
  const { theme } = useTheme();

  return (
    <>
      <tbody>
        <tr className={`poke-stats ${theme}`}>
          <th>Stat</th>
          <th>Base</th>
        </tr>
        <tr className={`poke-stats ${theme}`}>
          <th>Height</th>
          <th>{decimeterToCentimeters(info.height)} cm</th>
        </tr>
        <tr className={`poke-stats ${theme}`}>
          <th>Weight</th>
          <th>{hectogramToKilogram(info.weight)} kg</th>
        </tr>
        {stats &&
          stats.map((stat) => {
            return (
              <tr className={`poke-stats ${theme}`} key={stat.stat.name}>
                <td>{statsName(stat.stat.name)}</td>
                <td>{stat.base_stat}</td>
              </tr>
            );
          })}
      </tbody>
    </>
  );
};

export default PokeStats;
