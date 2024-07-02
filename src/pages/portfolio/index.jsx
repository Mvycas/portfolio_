import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap"; // No more Row and Col imports
import { dataportfolio, meta } from "../../content_option";
import { Link } from 'react-router-dom';

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Helmet>
      <Container className="portfolio-container">
        <div className="portfolio-grid">
          {dataportfolio.map((data, i) => (
            <div key={i} className="card" style={{ backgroundImage: `url(${data.img})` }}>
              <div className="card-content">
                <h2 className="card-title">{data.title}</h2>
                <p className="card-body">{data.description}</p>
                <Link to={data.link} className="button">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
