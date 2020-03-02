import React, { useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';

import Column from '../Column';
import { TicketModel } from '../../models';
import { Container, BoardContainer, SearchInput } from './styles';

function Board() {
  const columns = useSelector(state => state);
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search"
        aria-label="Search for a specific ticket"
        data-testid="search"
      />
      <BoardContainer data-testid="board">
        {Object.values(columns).map(({ id, title, tickets }) => {
          const filteredTickets = tickets.filter((ticket: TicketModel) =>
            ticket.text
              .toLowerCase()
              .trim()
              .includes(searchTerm.toLowerCase().trim())
          );

          return (
            <Column
              key={id}
              columnId={id}
              title={title}
              tickets={filteredTickets}
              setSearchTerm={setSearchTerm}
            />
          );
        })}
      </BoardContainer>
    </Container>
  );
}

export default Board;
