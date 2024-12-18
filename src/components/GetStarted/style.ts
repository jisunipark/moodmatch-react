import styled from '@emotion/styled';
import { darkText } from '../../styles/colors';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 820px;
  height: 720px;
  width: 100%;
  background: radial-gradient(
    63.68% 40.76% at 50% 103.08%,
    rgba(249, 167, 149, 0.16) 0%,
    rgba(13, 4, 2, 0) 100%
  );
`;

export const Text = styled.span`
  margin-top: 18px;
  margin-bottom: 50px;
  color: ${darkText};
  text-align: center;
  font-family: 'Plus Jakarta Sans';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
`;
