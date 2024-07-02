import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";
import Spline from "@splinetool/react-spline";
import { useSpline } from '../../components/splineContext';
import SplineWrapper from '../../components/SplineWrapper';

export const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991.98);
  const { splineLoaded } = useSpline();  // Only need the loaded flag here

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991.98);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    useEffect(() => {
    console.log("Home component mounted");
    return () => {
      console.log("Home component unmounted");
    };
  }, []);

  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <div className="intro_sec d-block d-lg-flex align-items-center">
        {!isMobile && (
            <div className="spline-container order-1 order-lg-2 h-100">
              <SplineWrapper />
            </div>
          )}
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center">
              <div className="intro mx-auto">
                <h2 className="mb-1x">{introdata.title}</h2>
                <h1 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h1>
                <p id="intro" className="mb-1x">{introdata.description}</p>
                <div className="intro_btn-action pb-5">
                  <Link to="/portfolio" className="text_2">
                    <div id="button_p" className="ac_btn btn">
                      My Portfolio
                    </div>
                  </Link>
                  <a href="mailto:martynas.vycas@hotmail.com" className="text_2">
                    <div id="button_h" className="ac_btn btn">
                      Contact Me
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
