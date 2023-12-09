import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Text = styled.p`
  display: flex;
  font-size: 30px;
  font-style: normal;
  font-weight: 600;
  color: #ffffff;
  text-align: center;
  width: 460px;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonByCatalog = styled(Link)`
  display: inline-block;
  padding: 15px 30px;
  border: 2px solid #3470ff;
  border-radius: 25px;
  background: #fff;
  color: #3470ff;
  font-family: 'Manrope', sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #3470ff;
    color: #fff;
    border-color: #fff;
  }
`;
