import React from "react";
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import { dataportfolio } from "../../content_option";
import "./styles.css"; 

import 'photoswipe/dist/photoswipe.css';
import { Gallery, Item } from 'react-photoswipe-gallery';

export const Project = () => {
  const { id } = useParams();
  const project = dataportfolio.find(p => p.id.toString() === id);

  if (!project) {
    return <div>Project not found.</div>; 
  }

  return (
    <HelmetProvider>
      <Helmet>
        <title>{project.title}</title>
        <meta name="description" content={project.description} />
      </Helmet>
      <Container className="portfolio-container" fluid>
        <div>
          <div className="project-banner" style={{ backgroundImage: `url(${project.banner})` }}></div>
          <div className="project-details">
            <h1 className="project-title">{project.title}</h1>
            {project.about.split("\n").map((paragraph, index) => (
              <p key={index} className="project-description">{paragraph}</p>
            ))}
          </div>
          {project.git && (
            <a href={project.git} target="_blank" rel="noopener noreferrer" className="github-button">
              <img src="/images/git.svg" alt="GitHub" />
              View Project on GitHub
            </a>
          )}

          <Gallery>
            <div  className="gallery-container">
            {project.pictures.map((picture, index) => (
              <Item
                key={index}
                original={picture.src}
                thumbnail={picture.src} 
                width={picture.width}
                height={picture.height}
                title={picture.title}
              >
                {({ ref, open }) => (
                  <div ref={ref} onClick={open} className="gallery-item">
                    <img src={picture.src} alt={picture.title} />
                  </div>
                )}
              </Item>
            ))}
            </div>
          </Gallery>
          
          {project.video && (
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src={project.video}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Project Video"
              ></iframe>
            </div>
          )}
        </div>
      </Container>
    </HelmetProvider>
  );
};
