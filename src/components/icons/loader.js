import React from 'react';
import { Helmet } from 'react-helmet';

const IconLoader = () => (
  <>
    {/* Load Protest Riot font */}
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Protest+Riot&display=swap"
        rel="stylesheet"
      />
    </Helmet>

    <svg id="logo" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 100 100">
      <title>Loader Logo</title>
      <g fill="none" fillRule="evenodd">
        {/* Outer Hexagon */}
        <path
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M50,5 
             L11,27 
             L11,72 
             L50,95 
             L89,73 
             L89,28 Z"
        />

        {/* Bigger and well-positioned “C” */}
        <text
          x="48%"
          y="53%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="66"
          fontWeight="900"
          fill="currentColor"
          fontFamily="'Protest Riot', sans-serif"
          id="C"
        >
          C
        </text>
      </g>
    </svg>
  </>
);

export default IconLoader;
