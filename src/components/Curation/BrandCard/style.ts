import styled from '@emotion/styled';
import { darkText } from '../../../styles/colors';

export const Wrapper = styled.div`
  width: 257px;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  margin-bottom: 14px;
  height: 225px;
  align-self: stretch;
  border-radius: 16px;
  border: 1.5px solid rgba(0, 0, 0, 0);
`;

export const Title = styled.span`
  margin-bottom: 10px;
  color: ${darkText};
  text-overflow: ellipsis;
  font-family: 'Plus Jakarta Sans';
  font-size: 17px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 141.176% */
  letter-spacing: -0.085px;
`;

export const Desc = styled.span`
  color: rgba(235, 213, 209, 0.62);
  font-family: 'Plus Jakarta Sans';
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 123.077% */
  letter-spacing: -0.065px;
`;
