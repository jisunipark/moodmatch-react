import styled from '@emotion/styled';
import { darkText } from '../../../styles/colors';

export const Wrapper = styled.div`
  display: flex;
  height: 265px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  gap: 12px;

  border-radius: 20px;
  border: 1.5px solid rgba(255, 255, 255, 0);
  background: rgba(232, 186, 176, 0.12);
`;

export const Value = styled.span`
  color: ${darkText};
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 100% */
  letter-spacing: -0.6px;
`;

export const Desc = styled.span`
  width: 352px;
  color: rgba(235, 213, 209, 0.62);
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
  letter-spacing: -0.07px;
`;
