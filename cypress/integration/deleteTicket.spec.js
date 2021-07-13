/// <reference types="cypress"/>
import selectors from "../support/selectors"

describe('Test hovering and deleting ticket', () => {
    let inputText = ' Ticket Number: '
    beforeEach('Visit the app', () => {
        cy.visit('https://milos-kanban-board.netlify.app/')
        //cy.visit('http://localhost:3000/')

        // Create a bunch od dummy tickets
        cy.addMultipleTickets(selectors.column1.title, selectors.column1.title+inputText, 3, 1)
        cy.addMultipleTickets(selectors.column2.title, selectors.column2.title+inputText, 1, 1)
        cy.addMultipleTickets(selectors.column3.title, selectors.column3.title+inputText, 2, 1)
        // Assertion of created tickets
        cy.ticketsExistInColumn(selectors.column1.title, 
            [
                selectors.column1.title+inputText+'3', 
                selectors.column1.title+inputText+'2', 
                selectors.column1.title+inputText+'1'
            ], 3, selectors.column1.color)
        cy.ticketsExistInColumn(selectors.column2.title, 
            [
                selectors.column2.title+inputText+'1'
            ], 1, selectors.column2.color)
        cy.ticketsExistInColumn(selectors.column3.title, 
            [
                selectors.column3.title+inputText+'2', 
                selectors.column3.title+inputText+'1'
            ], 2, selectors.column3.color)
    })

    it.only('Hovering the ticket, "x" button appears', () => {
        cy.hoverTicket(selectors.column1.title+inputText+'3')
        cy.hoverTicket(selectors.column1.title+inputText+'2')
        cy.hoverTicket(selectors.column1.title+inputText+'1')
        cy.hoverTicket(selectors.column2.title+inputText+'1')
        cy.hoverTicket(selectors.column3.title+inputText+'2')
        cy.hoverTicket(selectors.column3.title+inputText+'1')
    })

    it('Click on "x" button deletes the corresponding ticket', () => {
        cy.hoverTicket(selectors.column1.title+inputText+'2').click()
        cy.hoverTicket(selectors.column2.title+inputText+'1').click()
        cy.hoverTicket(selectors.column3.title+inputText+'2').click()

        cy.ticketsExistInColumn(selectors.column1.title, 
            [
                selectors.column1.title+inputText+'3',
                selectors.column1.title+inputText+'1',

            ], 2, selectors.column1.color)

        cy.ticketsExistInColumn(selectors.column2.title, 
            [], 0, selectors.column2.color)
        
        cy.ticketsExistInColumn(selectors.column3.title, 
            [
                selectors.column3.title+inputText+'1'

            ], 1, selectors.column3.color)
    })
})