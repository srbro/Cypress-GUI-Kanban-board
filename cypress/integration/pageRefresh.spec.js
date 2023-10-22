/// <reference types="cypress"/>
import selectors from "../support/selectors.js";

describe("Refreshing the page, recovers the current state", () => {
  beforeEach("Visit the app", () => {
    cy.visit("https://kanban-board-two.vercel.app/");
    //cy.visit('http://localhost:3000/')
  });
  it("Page Reload", () => {
    cy.log("Add new ticket in To Do column");
    cy.newTicket(
      selectors.column1.title,
      'This is first ticket in the Column "To Do"',
      selectors.column1.color
    );
    cy.newTicket(
      selectors.column2.title,
      'This is first ticket in the Column "In Progress"',
      selectors.column2.color
    );
    cy.newTicket(
      selectors.column3.title,
      'This is first ticket in the Column "Done"',
      selectors.column3.color
    );
    cy.log("Reload and check if created tickets are still visible");
    //cy.wait(1000)
    cy.reload();
    cy.ticketsExistInColumn(
      selectors.column1.title,
      ['This is first ticket in the Column "To Do"'],
      1,
      selectors.column1.color
    );
    cy.ticketsExistInColumn(
      selectors.column2.title,
      ['This is first ticket in the Column "In Progress"'],
      1,
      selectors.column2.color
    );
    cy.ticketsExistInColumn(
      selectors.column3.title,
      ['This is first ticket in the Column "Done"'],
      1,
      selectors.column3.color
    );
  });
});
