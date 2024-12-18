import styled from '@emotion/styled';
import { buttonText, primary } from '../../styles/colors';

interface Props {
  width: 'short' | 'long';
}

export const Button = styled.button<Props>`
  display: flex;
  padding: ${(props) => (props.width === 'long' ? '10px 20px' : '12px 28px')};
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width === 'long' && '400px'};
  border-radius: 16px;
  background: ${primary};

  color: ${buttonText};
  font-family: 'Plus Jakarta Sans';
  font-size: ${(props) => (props.width === 'long' ? '15px' : '20px')};
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 120% */

  cursor: pointer;
`;
