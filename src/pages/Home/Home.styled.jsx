import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import ImageHero from '../../images/tesla-cybertruck-hero.jpg';
import ImageHeroUk from '../../images/bnr_top_save.webp';

export const WrapperUk = styled.div`
  display: flex;
  background-image: url(${ImageHeroUk});
  background-repeat: no-repeat;
  background-position: top;

  width: 100%;
  height: 25px;
`;

export const TitleUk = styled.h2`
  display: flex;
  align-items: center;
  color: #ffffff;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  font-size: 20px;
  margin-left: 15px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(${ImageHero});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Text = styled.p`
  display: flex;
  font-size: 45px;
  font-style: normal;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  width: 490px;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    width: 80%;
    font-size: 28px;
  }

  @media (max-width: 480px) {
    width: 90%;
    font-size: 24px;
  }
`;

export const ButtonByCatalog = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #3470ff;
  border-radius: 10px;
  padding: 15px 30px;
  background: #3470ff;
  color: #ffffff;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
  width: 240px;
  height: 12px;
  margin-left: auto;
  margin-right: auto;
  position: fixed;
  bottom: 90px;
  right: 50px;

  &::after {
    content: '\u2192';
    font-size: 20px;
    margin-left: 18px;
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.3s, transform 0.3s;
    animation: arrowAnimation 2s infinite;
  }

  &:hover {
    background-color: #3470ff;
    color: #fff;
    border-color: #fff;

    &::after {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 768px) {
    width: 180px;
    font-size: 14px;
    bottom: 70px;
    right: 30px;

    &::after {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    width: 160px;
    font-size: 12px;
    bottom: 50px;
    right: 20px;

    &::after {
      font-size: 14px;
    }
  }

  @keyframes arrowAnimation {
    0%,
    100% {
      opacity: 0;
      transform: translateX(-20px);
    }
    50% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;
