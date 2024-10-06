"use client";

import { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import styles from "./Map.module.css"; 
import React from "react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const Map = () => {
    const [highlighted, setHighlighted] = useState<string | null>(null);
    const [countryInfo, setCountryInfo] = useState<{ name: string; info: string } | null>(null); // State for country info

    const handleCountryClick = (countryName: string) => {
        setCountryInfo({
            name: countryName,
            info: "Information not available."
        });
    };
  
    return (
      <div className={styles.mapContainer}>
        <ComposableMap projection="geoMercator" projectionConfig={{scale: 155,}} width={1000} height={1000} style={{ width: "100%", height: "100%"}} >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className={styles.geography} // Use the geography class
                  onMouseEnter={() => setHighlighted(geo.properties.name)}
                  onMouseLeave={() => setHighlighted(null)}
                  onClick={() => handleCountryClick(geo.properties.name)}
                />
              ))
            }
          </Geographies>
        </ComposableMap>

        <div className={styles.infoPanel}>
                {countryInfo ? (
                    <>
                        <h3>{countryInfo.name}</h3>
                        <div className="divider"></div>
                        <p>{countryInfo.info}</p>
                    </>
                ) : (
                    <p>Click on a country to see its information.</p>
                )}
            </div>
      </div>
    );
  };
  
  export default Map;