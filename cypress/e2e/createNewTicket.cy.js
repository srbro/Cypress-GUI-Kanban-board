/// <reference types="cypress"/>
import selectors from "../support/selectors.js";

describe("Add new ticket", () => {
  beforeEach("Visit the app", () => {
    cy.visit("https://kanban-board-two.vercel.app/");
    //cy.visit('http://localhost:3000/')
  });
  it("Test creating 1 new ticket, per column", () => {
    // Creating 1 ticket per column
    cy.addMultipleTickets(
      selectors.column1.title,
      "This is first ticket in the Column " + selectors.column1.title,
      1,
      0
    );
    cy.addMultipleTickets(
      selectors.column2.title,
      "This is first ticket in the Column " + selectors.column2.title,
      1,
      0
    );
    cy.addMultipleTickets(
      selectors.column3.title,
      "This is first ticket in the Column " + selectors.column3.title,
      1,
      0
    );
    // Assertion of created tickets
    cy.ticketsExistInColumn(
      selectors.column1.title,
      ["This is first ticket in the Column " + selectors.column1.title],
      1,
      selectors.column1.color
    );
    cy.ticketsExistInColumn(
      selectors.column2.title,
      ["This is first ticket in the Column " + selectors.column2.title],
      1,
      selectors.column2.color
    );
    cy.ticketsExistInColumn(
      selectors.column3.title,
      ["This is first ticket in the Column " + selectors.column3.title],
      1,
      selectors.column3.color
    );
  });
});
