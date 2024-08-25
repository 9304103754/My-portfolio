// import React from 'react';
// import './About.css';
// import raviImagefrom './ravi.png';

// const About = () => {
//   return (
//     <div className="about-container">
//       {/* Photo of yourself */}
//       <div className="photo">
//         <img src={raviImage} alt="Ravi Kumar Jha" />
//       </div>

//       {/* About me section */}
//       <div className="about-me">
//         <h1 className='heading'>About Me</h1>
//         <p className='about'>
//         Hello, I'm Ravi Kumar Jha, a dedicated Computer Science and Engineering student currently in my 4th year at Maulana Abul Kalam Azad University of Technology, West Bengal. I am passionate about turning innovative ideas into reality through technology. My strong suit lies in data structures and algorithms, 
//         and I'm always eager to expand my knowledge and take on new challenges in the world of computer science. 
//         Feel free to connect with me to discuss opportunities or collaborate on exciting projects</p>
//       </div>

//       {/* Background image */}
//       <div className="background-image">
//         <img src="[your background image URL]" alt="Background Image" />
//       </div>
//     </div>
//   );
// };

// export default About;





import React from 'react';
import './About.css';
import RaviImage from './ravi.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="left-section">
        {/* Photo of yourself */}
        <div className="photo">
          <img src={RaviImage} alt="Ravi kumar jha" />
        </div>
        {/* Education Background */}
        <div className="education-background">
          <h2 className="education-heading">Education</h2>
          <p className="education-details">
            B.Tech in Electrical  Engineering<br />
            Deenbandhu Chhotu Ram University Of Science and Technology,  Sonipat Haryana(2021-2025)
          </p>
          <p className="education-details">
            12th Grade - [Marwari College Darbhanga]
          </p>
          <p className="education-details">
            10th Grade - [+2 B.K.S High School]
          </p>
        </div>
      </div>

      {/* About me section */}
      <div className="right-section">
        <h1 className="heading">About Me</h1>
        <p className="about">
          Hello, I am a B.Tech student specializing in Electrical Engineering with a strong interest in software development. I am passionate about leveraging technology to solve real-world problems, particularly in areas where hardware and software intersect. Currently, I am exploring software development, focusing on areas like software development, front-end , back end, data analysis, and automation. I aim to build innovative solutions, including my recent project on react js , java .Feel free to connect with me to discuss opportunities or collaborate on exciting projects.
        </p>
      </div>

      {/* Background image */}
      <div className="background-image">
        // eslint-disable-next-line jsx-a11y/img-redundant-alt
        <img src="[your background image URL]" alt="Background Image" />
      </div>
    </div>
  );
};

export default About;
