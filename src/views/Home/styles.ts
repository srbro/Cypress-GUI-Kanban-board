import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  width: 100%;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: calc(28px + 0.5vh + 1.5vw);
  font-weight: bold;
  margin: 2.4rem 0;
`;

export const Subtitle = styled.h2`
  font-size: 1.6rem;
  font-weight: normal;
`;

export const Separator = styled.hr`
  margin: 2.4rem 0;
  border-color: ${colors.black600};
  opacity: 0.2;
  border-width: 0.5px;
  width: 50%;
`;
