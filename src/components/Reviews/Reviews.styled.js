import styled from 'styled-components';

export const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ReviewBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  background-color: rgb(3, 47, 68, 0.3);
  padding: 10px;
  border-radius: 30px;
`;

export const ReviewDescP = styled.p`
  color: rgb(63, 29, 56);
  font-family: 'Lucida Sans', Arial, sans-serif;
  font-size: 16px;
  line-height: 26px;
  margin: 0;
`;

export const ReviewAuthor = styled.p`
  color: rgb(63, 29, 56);
  font-style: italic;
  font-family: 'Lucida Sans', Arial, sans-serif;
  font-size: 22px;
  line-height: 26px;
  margin: 0;
`;
