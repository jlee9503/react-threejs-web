import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [90.0, -40.0, 0],
        center: [-5, -2],
        scale: 1000,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#153b45"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-121, 38]}
        dx={100}
        dy={-30}
        connectorProps={{
          stroke: "#FFFFFF",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="5" textAnchor="start" fill="#FFFFFF">
          {"California"}
        </text>
      </Annotation>
      <Annotation
        subject={[-74.4, 41.5]}
        dx={-100}
        dy={-30}
        connectorProps={{
          stroke: "#FFFFFF",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-5" textAnchor="end" fill="#FFFFFF">
          {"Headquater at New York"}
        </text>
      </Annotation>
      <Annotation
        subject={[-81.4, 27.5]}
        dx={70}
        dy={-30}
        connectorProps={{
          stroke: "#FFFFFF",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="5" textAnchor="start" fill="#FFFFFF">
          {"Florida"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
