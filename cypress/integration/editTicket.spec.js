/// <reference types="cypress"/>
import selectors from "../support/selectors"

describe('Test editing several tickets', () => {
    let inputText = ' Ticket Number: '
    let editText = 'NEW TEXT lorem IPUSM 12/*-.#$@ veryveryveryverylongword'
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
        

        // Edit 1 ticket in In Progress column


        // Edit 1 ticket in Done column
    })

    it('Edit 1 ticket in To Do -> Drag it to In Progress and edit it -> Drag it to Done and edit it', () => {
        // Edit ticket in To Do, drag it to In Progress and assert


        // Edit the same ticket in In Progress, drag to Done and assert


        // Edit the same ticket in Done and assert

        
    })
})