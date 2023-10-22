/// <reference types="cypress"/>

import selectors from "../support/selectors";

describe("Refreshing the page, recovers the current state", () => {
  beforeEach("Visit the app", () => {
    cy.visit("https://kanban-board-two.vercel.app/");
    //cy.visit('http://localhost:3000/')
  });
  it("Check if the displayed number of tickets (per column) is correct", () => {
    // // Add multiple tickets with text - slower
    // cy.addMultipleTickets(selectors.column1.title, 'test', 4, 1)
    // cy.addMultipleTickets(selectors.column2.title, 'test', 15, 1)
    // cy.addMultipleTickets(selectors.column3.title, 'test', 9, 1)

    //Add multiples tickets w/o text - faster
    cy.clickOnAddButton(selectors.column1.title, 4);
    cy.clickOnAddButton(selectors.column2.title, 15);
    cy.clickOnAddButton(selectors.column3.title, 9);

    cy.wait(1000);
    cy.reload();

    //Assertion of a ticket number, per column
    cy.ticketNumber(selectors.column1.title, 4);
    cy.ticketNumber(selectors.column2.title, 15);
    cy.ticketNumber(selectors.column3.title, 9);
  });
});
