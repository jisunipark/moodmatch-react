import styled from '@emotion/styled';
import { buttonText, primary } from '../../styles/colors';

interface Props {
  width: 'short' | 'long';
}

export const Button = styled.button<Props>`
  display: flex;
  padding: 12px 28px;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width === 'long' && '400px'};
  border: none;
  border-radius: 16px;
  background: ${primary};

  color: ${buttonText};
  font-family: 'Plus Jakarta Sans';
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */

  cursor: pointer;
`;
