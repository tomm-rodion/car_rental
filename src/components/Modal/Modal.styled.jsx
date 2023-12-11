import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  padding: 15px 35px 40px;

  @media screen and (max-width: 767px) {
    padding: 15px;
  }
`;

export const CloseIcon = styled.button`
  position: absolute;
  background-color: transparent;
  border: none;
  top: 8px;
  right: 6px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    top: 5px;
    right: 5px;
  }
`;

export const IconX = styled.img`
  width: 24px;
  height: 24px;

  @media screen and (max-width: 767px) {
    width: 18px;
    height: 18px;
  }
`;

export const Image = styled.img`
  width: 461px;
  height: 248px;
  display: block;
  object-fit: cover;
  border-radius: 14px;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: auto;
    border-radius: 6;
  }
`;

export const WrapInfoContainer = styled.div`
  margin-top: 14px;
  margin-bottom: 24px;

  @media screen and (max-width: 767px) {
    margin-top: 10px;
    margin-bottom: 16px;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 8px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TitleAboutCar = styled.h2`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;
  color: #121417;

  @media screen and (max-width: 767px) {
    font-size: 16px;
    margin-bottom: 8px;
  }
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  font-size: 12px;
  color: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;

  &:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
    margin-left: 6px;
    margin-right: 6px;
  }

  @media screen and (max-width: 767px) {
    margin-bottom: 8px;
  }
`;

export const Description = styled.p`
  line-height: 1.43;
  margin-top: 14px;
  width: 461px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;
export const Info = styled.h3`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.43;
  color: #121417;
  margin-top: 24px;
  margin-bottom: 8px;

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }
`;

export const ConditionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  font-size: 12px;
  letter-spacing: -0.24px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const ConditionItem = styled.li`
  border-radius: 35px;
  color: #363535;
  background-color: #f9f9f9;
  padding: 7px 14px;
`;

export const ConditionSpan = styled.span`
  color: #3470ff;
  font-weight: 600;
`;
