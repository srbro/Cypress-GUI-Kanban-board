# Kanban-board
- Cypress project

Execute tests:
- To run Cypress GUI -> npx cypress open
- In the top right choose between web browsers
- In the list of INTEGRATION TESTS, click on any of the tests to execute it in the browser

Commands created:
- newTicket (column, text, color)
- ticketsExistInColumn (column, text, numOfTickets, color)
- clickOnAddButton (column, numOfTimes)
- ticketNumber (column, num)
- addMultipleTickets (column, text, numOfTimes, counter)
- dragDrop (column, text)
- editTicket (column, inputText, editText, ticketIndex)