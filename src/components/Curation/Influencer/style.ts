import styled from '@emotion/styled';
import { darkText, primary } from '../../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  padding: 10px 0px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 12px;
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1.5px solid rgba(0, 0, 0, 0);
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: center;
  flex: 1 0 0;
`;

export const Name = styled.span`
  color: ${darkText};
  font-family: 'Plus Jakarta Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 133.333% */
`;

export const UserName = styled.span`
  color: rgba(235, 213, 209, 0.62);
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 123.077% */
`;

export const Button = styled.button`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: ${primary};

  color: #fffbfa;
  font-family: 'Plus Jakarta Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 133.333% */

  cursor: pointer;
`;
