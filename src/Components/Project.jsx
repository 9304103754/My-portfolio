

import React from 'react';
import './project.css';
import CalculatorImg from './Image/calculator.jpg';
import Img2 from './Image/second.jpg';
import Img3 from './Image/third.jpg';
import Img4 from './Image/forth.jpg';
import Img5 from './Image/fifth.jpg';
import Img6 from './Image/sixth.jpg';
const projects = [
  {
    title: 'Quiz Desktop Application',
    description: 'A desktop application for quizzes using Java and Swing.',
    imageUrl:  Img2,
    repoUrl: 'https://github.com/9304103754/QuizApplication',
  },
  {
    title: 'Text Summarization Website',
    description: 'A website for text summarization using Python, NLP, Flask, HTML, and CSS.',
    imageUrl: Img3,
    repoUrl: 'https://github.com/9304103754/Text_summarization',
  },
  
  
  
  
  {
    title: 'Calculator',
    description: 'A calculator using HTML, CSS, and JavaScript.',
    imageUrl: CalculatorImg,
    repoUrl: 'https://github.com/9304103754/Calculator',
  },
  {
    title: 'EMI Calculator',
    description: 'An EMI calculator using HTML, CSS, and JavaScript.',
    imageUrl: Img3,
    repoUrl: 'https://github.com/9304103754/Emi-_alculation_website',
  },
  
];

const Project = () => {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div
              className="project-image"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            >
              <div className="text-container">
                <h3 className='title'>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="overlay">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn">
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cta-section">
        <h3>Want to see more projects?</h3>
        <a href="https://github.com/9304103754" target="_blank" rel="noopener noreferrer" className="cta-button">
          Visit My GitHub
        </a>
      </div>
    </section>
  );
};

export default Project;
