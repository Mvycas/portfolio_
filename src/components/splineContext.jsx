// SplineContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const SplineContext = createContext();

export const SplineProvider = ({ children }) => {
  const [splineLoaded, setSplineLoaded] = useState(false);

  useEffect(() => {
    if (!splineLoaded) {
      setSplineLoaded(true);
      console.log("Spline is now set to loaded.");
    }
  }, [splineLoaded]);

  return (
    <SplineContext.Provider value={{ splineLoaded, setSplineLoaded }}>
      {children}
    </SplineContext.Provider>
  );
};

export const useSpline = () => useContext(SplineContext);
