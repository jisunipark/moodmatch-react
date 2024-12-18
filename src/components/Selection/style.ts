import styled from '@emotion/styled';
import { darkText, primary } from '../../styles/colors';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 60px);
  justify-content: center;
  align-items: center;
  gap: 48px;
  align-self: stretch;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Direction = styled.span`
  color: ${darkText};
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 213.333% */
`;

export const OptionWrapper = styled.div`
  display: flex;
  width: 720px;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 14px;
  flex-wrap: wrap;
`;

export const SkipButton = styled.button`
  color: ${primary};
  font-family: 'Plus Jakarta Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 133.333% */
  cursor: pointer;
`;
