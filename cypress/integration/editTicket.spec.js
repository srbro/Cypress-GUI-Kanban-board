/// <reference types="cypress"/>
import selectors from "../support/selectors"

describe('Test editing several tickets', () => {
    let inputText = ' Ticket Number: '
    let editText = ' NEW TEXT lorem IPUSM 12/*-.#$@ veryveryveryverylongword'
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

    it('Double click and input dummy text into several tickets and assert', () => {
        // Edit 1 ticket in To Do column
        cy.editTicket(selectors.column1.title, selectors.column1.title+inputText+'1', editText, 3)

        // Edit 1 ticket in In Progress column
        cy.editTicket(selectors.column2.title, selectors.column2.title+inputText+'1', editText, 1)

        // Edit 1 ticket in Done column
        cy.editTicket(selectors.column3.title, selectors.column3.title+inputText+'2', editText, 1)

    })

    it('Edit 1 ticket in To Do -> Drag it to In Progress and edit it -> Drag it to Done and edit it', () => {
        // Edit ticket in To Do, drag it to In Progress
        cy.editTicket(selectors.column1.title, selectors.column1.title+inputText+'2', editText, 2)
        cy.dragDrop(selectors.column2.title, selectors.column1.title+inputText+'2'+editText)

        // Edit the same ticket in In Progress, drag to Done
        cy.editTicket(selectors.column2.title, selectors.column1.title+inputText+'2'+editText, editText, 1)
        cy.dragDrop(selectors.column3.title, selectors.column1.title+inputText+'2'+editText+editText)

        // Edit the same ticket in Done
        cy.editTicket(selectors.column3.title, selectors.column1.title+inputText+'2'+editText+editText, editText, 1)
        cy.dragDrop(selectors.column1.title, selectors.column1.title+inputText+'2'+editText+editText+editText)
        
        // Assert the last state
        cy.ticketsExistInColumn(selectors.column1.title, 
            [
                selectors.column1.title+inputText+'2'+editText+editText+editText,
                selectors.column1.title+inputText+'3',
                selectors.column1.title+inputText+'1'
            ], 3, selectors.column1.color)
    })
})