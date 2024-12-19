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

export const OptionWrapper = styled.div`
  display: flex;
  width: 600px;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 14px;
  flex-wrap: wrap;
`;

export const Option = styled.button`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1.5px solid rgba(182, 151, 145, 0.2);
  background-color: transparent;

  color: ${darkText};
  font-family: 'Plus Jakarta Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 133.333% */

  cursor: pointer;
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
