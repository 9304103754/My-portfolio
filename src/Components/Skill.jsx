
import './Skill.css';
import React from 'react';

import { FaHtml5, FaCss3, FaJs, FaPython, FaJava, FaReact, FaMicrochip } from 'react-icons/fa';
import { DiMysql, DiMongodb } from 'react-icons/di';
import { FaJava as FaHibernate } from 'react-icons/fa'; 
import { FaBootstrap } from 'react-icons/fa'; 
import { SiNextdotjs } from 'react-icons/si'; 

const skills = [
  { name: 'HTML', icon: FaHtml5, color: '#FF69B4', rating: 4 },
  { name: 'CSS', icon: FaCss3, color: '#2196F3', rating: 3 },
  { name: 'JavaScript', icon: FaJs, color: '#F7DC6F', rating: 4 },
  { name: 'Python', icon: FaPython, color: '#4B8BBE', rating: 3 },
  { name: 'Java', icon: FaJava, color: '#007396', rating: 4 },
  { name: 'React', icon: FaReact, color: '#61DAFB', rating: 3 },
  // Add more skills here
  { name: 'MySQL', icon: DiMysql, color: '#00758F', rating: 4 },
  { name: 'MongoDB', icon: DiMongodb, color: '#47A248', rating: 2 },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', rating: 3 },
  //Add Some more skills
  {name : 'Microcontroller', icon:FaMicrochip, color:'#FF69B4', rating: 3 },
];

const Skill = () => {
  return (
    <div className="skills">
      <h2 className='s'>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} style={{ backgroundColor: skill.color }}>
            <div className="skill-container">
              {React.createElement(skill.icon, { size: 24, color: '#fff' })}
              <span className="skill-name">{skill.name}</span>
              <div className="skill-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < skill.rating ? 'filled' : 'unfilled'}></span>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
