import React from 'react';
import { Helmet } from 'react-helmet';

const IconLogo = () => (
  <>
    {/* Import the Protest Riot font */}
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Protest+Riot&display=swap"
        rel="stylesheet"
      />
    </Helmet>

    <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
      <title>Logo</title>
      <g transform="translate(-8.000000, -2.000000)">
        <g transform="translate(11.000000, 5.000000)">
          {/* Hexagon border */}
          <polygon
            id="Shape"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="39 0 0 22 0 67 39 90 78 68 78 23"
          />
          {/* Big C slightly top-left */}
          <text
            x="47%" // move slightly left
            y="50%" // move slightly up
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="56" // increased size
            fontWeight="900"
            fontFamily="'Protest Riot', sans-serif"
            fill="currentColor"
          >
              C
          </text>
        </g>
      </g>
    </svg>
  </>
);

export default IconLogo;
