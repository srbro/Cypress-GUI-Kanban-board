import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  max-width: 75rem;
  overflow-x: auto;
  width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    &:not(:last-child) {
      margin-right: 0.4rem;
    }
  }
`;
