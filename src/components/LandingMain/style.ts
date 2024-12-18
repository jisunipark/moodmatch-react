import styled from '@emotion/styled';

export const Wrapper = styled.section`
  display: flex;
  padding: 96px 0px;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  max-width: 820px;
  width: 100%;
`;

export const Image = styled.img`
  width: 100%;
  height: 508px;
  border-radius: 28px;
  border: 1.5px solid rgba(110, 80, 73, 0);
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
`;
