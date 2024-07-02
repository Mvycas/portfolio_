import React, { useState, useCallback } from "react";
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container } from "react-bootstrap";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { dataportfolio, meta } from "../../content_option";
import "./styles.css";


export const Project = () => {
  const { id } = useParams();
  const project = dataportfolio.find(p => p.id.toString() === id);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

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
          {/* Banner image */}
          <div className="project-banner" style={{ backgroundImage: `url(${project.banner})` }}>
          </div>

          {/*Project about*/}
        

          <div className="project-details">
            <h1 className="project-title">{project.title}</h1>
            {project.about.split("\n").map((paragraph, index) => (
              <p key={index} className="project-description">{paragraph}</p>
            ))}
          </div>

          {/* GitHub Button */}
          {project.git && (
            <a href={project.git} target="_blank" rel="noopener noreferrer" className="github-button">
              <img src="/images/git.svg" alt="GitHub" />
              View Project on GitHub
            </a>
          )}

          <Gallery photos={project.pictures} onClick={openLightbox} />
          {/* YouTube Video */}
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
          <ModalGateway>
            {viewerIsOpen && (
              <Modal onClose={closeLightbox}>
                <Carousel 
                  currentIndex={currentImage}
                  views={project.pictures.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            )}
          </ModalGateway>
        </div>
      </Container>
    </HelmetProvider>
  );
};
