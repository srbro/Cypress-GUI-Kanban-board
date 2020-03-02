import styled from 'styled-components';
import colors from '../../styles/colors';

export const Container = styled.div`
  max-width: 75rem;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  width: 100%;
`;

export const BoardContainer = styled.div`
  display: flex;
  max-width: 75rem;
  overflow-x: auto;
  margin-top: 2.4rem;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    &:not(:last-child) {
      margin-right: 0.4rem;
    }
  }
`;

export const SearchInput = styled.input`
  padding: 1.2rem;
  font-size: 1.6rem;
  margin-left: auto;
  border: 1px solid ${colors.gray};

  &:focus {
    outline: 1px solid ${colors.black200};
  }

  @media (max-width: 768px) {
    margin-left: 0;
    align-self: center;
  }
`;
