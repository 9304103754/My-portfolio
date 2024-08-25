import React from 'react';
import styled, { keyframes } from 'styled-components';
import RaviImage from './ravi.jpg';

const Hero = () => {
  return (
    <HeroSection>
      <div className="heroInner">
        <span>
          <h1>
            <AnimatedText>
              Hi, I'm <YellowText>Ra</YellowText>vi Ku<YellowText>ma</YellowText>r <YellowText>Jha</YellowText>
            </AnimatedText>
            <br />
            <AnimatedText>
              Software <YellowText>Dev</YellowText>eloper
            </AnimatedText>
          </h1>
          <ExploreButton href="#">
            Explore Now
          </ExploreButton>
        </span>
        <ImageContainer>
          <img src={RaviImage} alt="Ravi Kumar Jha" />
        </ImageContainer>
      </div>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent 10rem),
    url(https://images.pexels.com/photos/133325/pexels-photo-133325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=600&dpr=1);
  background-position: center, bottom left;
  background-size: cover, cover;
  height: fit-content;
  color: #fafafc;
  padding: 15rem 3rem 6rem;
  .heroInner {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
  }
  span {
    max-width: 50%;
  }
  h1 {
    font-weight: 900;
    font-size: clamp(2rem, 5.5vw, 3.25rem);
    line-height: 1.2;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 576px) {
    background: linear-gradient(to bottom, #0a0c2c80 3rem, transparent),
      url(${RaviImage});
    background-position: center, bottom left;
    background-size: cover, cover;
    align-items: flex-start;
    padding-top: 7.5rem;
    height: 75vh;
    max-height: 720px;
    .heroInner {
      flex-direction: column;
    }
    span {
      max-width: 100%;
      text-align: center;
    }
    img {
      margin-top: 1.5rem;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
    }
  }
`;

const AnimatedText = styled.span`
  animation: ${keyframes`
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `} 2s ease-in-out;
`;

const ImageContainer = styled.div`
  margin-top: -150px;
  margin-right: 5px;
  width: 700px;
  height: 700px;
  overflow: hidden;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const YellowText = styled.span`
  color: yellow;
`;

const ExploreButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  font-size: 1.25rem;
  font-weight: bold;
  color: #0a0c2c;
  background-color: #f7c948;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f7b100;
    transform: translateY(-2px);
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
  }
`;

export default Hero;
