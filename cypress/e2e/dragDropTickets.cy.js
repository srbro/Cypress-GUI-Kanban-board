/// <reference types="cypress"/>
import selectors from "../support/selectors";

describe("Drag & Drop Tickets accross the columns", () => {
  let inputText = " Ticket Number: ";
  beforeEach("Visit the app", () => {
    //cy.visit('https://milos-kanban-board.netlify.app/')
    cy.visit("https://kanban-board-two.vercel.app/");
    //cy.visit('http://localhost:3000/')

    // Create a bunch od dummy tickets
    cy.addMultipleTickets(
      selectors.column1.title,
      selectors.column1.title + inputText,
      3,
      1
    );
    cy.addMultipleTickets(
      selectors.column2.title,
      selectors.column2.title + inputText,
      1,
      1
    );
    cy.addMultipleTickets(
      selectors.column3.title,
      selectors.column3.title + inputText,
      2,
      1
    );
    // Assertion of created tickets
    cy.ticketsExistInColumn(
      selectors.column1.title,
      [
        selectors.column1.title + inputText + "3",
        selectors.column1.title + inputText + "2",
        selectors.column1.title + inputText + "1",
      ],
      3,
      selectors.column1.color
    );
    cy.ticketsExistInColumn(
      selectors.column2.title,
      [selectors.column2.title + inputText + "1"],
      1,
      selectors.column2.color
    );
    cy.ticketsExistInColumn(
      selectors.column3.title,
      [
        selectors.column3.title + inputText + "2",
        selectors.column3.title + inputText + "1",
      ],
      2,
      selectors.column3.color
    );
  });

  it("To Do -> In Progress & Done    In Progress -> Done & To Do   Done -> To Do & In Progress", () => {
    //Drag tickets from To Do to In Progress and Done
    cy.dragDrop(
      selectors.column2.title,
      selectors.column1.title + inputText + "3"
    );
    cy.dragDrop(
      selectors.column2.title,
      selectors.column1.title + inputText + "1"
    );
    cy.dragDrop(
      selectors.column3.title,
      selectors.column1.title + inputText + "2"
    );
    // Assertion of all column/tickets
    cy.ticketsExistInColumn(
      selectors.column1.title,
      [],
      0,
      selectors.column1.color
    );
    cy.ticketsExistInColumn(
      selectors.column2.title,
      [
        selectors.column1.title + inputText + "1",
        selectors.column1.title + inputText + "3",
        selectors.column2.title + inputText + "1",
      ],
      3,
      selectors.column2.color
    );
    cy.ticketsExistInColumn(
      selectors.column3.title,
      [
        selectors.column1.title + inputText + "2",
        selectors.column3.title + inputText + "2",
        selectors.column3.title + inputText + "1",
      ],
      3,
      selectors.column3.color
    );

    //Drag tickets from In Progress to Done and To Do
    cy.dragDrop(
      selectors.column3.title,
      selectors.column1.title + inputText + "3"
    );
    cy.dragDrop(
      selectors.column3.title,
      selectors.column2.title + inputText + "1"
    );
    cy.dragDrop(
      selectors.column1.title,
      selectors.column1.title + inputText + "1"
    );
    // Assertion of all column/tickets
    cy.ticketsExistInColumn(
      selectors.column1.title,
      [selectors.column1.title + inputText + "1"],
      1,
      selectors.column1.color
    );
    cy.ticketsExistInColumn(
      selectors.column2.title,
      [],
      0,
      selectors.column2.color
    );
    cy.ticketsExistInColumn(
      selectors.column3.title,
      [
        selectors.column2.title + inputText + "1",
        selectors.column1.title + inputText + "3",
        selectors.column1.title + inputText + "2",
        selectors.column3.title + inputText + "2",
        selectors.column3.title + inputText + "1",
      ],
      5,
      selectors.column3.color
    );

    //Drag tickets from Done to To Do and In Progress
    cy.dragDrop(
      selectors.column1.title,
      selectors.column1.title + inputText + "2"
    );
    cy.dragDrop(
      selectors.column2.title,
      selectors.column1.title + inputText + "3"
    );
    cy.dragDrop(
      selectors.column1.title,
      selectors.column2.title + inputText + "1"
    );
    cy.dragDrop(
      selectors.column2.title,
      selectors.column3.title + inputText + "1"
    );
    //Assertion of all column/tickets
    cy.ticketsExistInColumn(
      selectors.column1.title,
      [
        selectors.column2.title + inputText + "1",
        selectors.column1.title + inputText + "2",
        selectors.column1.title + inputText + "1",
      ],
      3,
      selectors.column1.color
    );
    cy.ticketsExistInColumn(
      selectors.column2.title,
      [
        selectors.column3.title + inputText + "1",
        selectors.column1.title + inputText + "3",
      ],
      2,
      selectors.column2.color
    );
    cy.ticketsExistInColumn(
      selectors.column3.title,
      [selectors.column3.title + inputText + "2"],
      1,
      selectors.column3.color
    );
  });
});
