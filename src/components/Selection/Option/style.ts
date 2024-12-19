import styled from '@emotion/styled';
import { darkText, primary } from '../../../styles/colors';

export const Wrapper = styled.button<{ selected: boolean }>`
  display: flex;
  padding: 10px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 1.5px solid rgba(182, 151, 145, 0.2);
  background-color: ${(props) => (props.selected ? primary : 'transparent')};

  color: ${darkText};
  font-family: 'Plus Jakarta Sans';
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 133.333% */

  cursor: pointer;

  &:hover {
    background: ${(props) => props.selected || 'rgba(182, 151, 145, 0.2)'};
  }
`;
