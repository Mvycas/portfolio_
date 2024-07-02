// SplineWrapper.js
import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { useSpline } from './splineContext';

const SplineWrapper = () => {
  const { splineLoaded } = useSpline();
  const location = useLocation();
  const Spline = React.lazy(() => import('@splinetool/react-spline'));


  if (!splineLoaded) return null;

  const isVisible = location.pathname === '/';

  return (
    <div style={{ display: isVisible ? 'block' : 'none', height: '100%', width: '100%', position: 'absolute', zIndex: '-1' }}>
    <Suspense fallback={<div>Loading...</div>}>
      <Spline scene="https://prod.spline.design/qr3VNhtOoQghR6d1/scene.splinecode" />
    </Suspense>
    </div>

  );
};

export default SplineWrapper;
