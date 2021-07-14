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

    it('Search several terms and assert if all the columns have only the corresponding tickets', () => {
        // Type in the search bar words that exist in the tickets and assert
        cy.get(selectors.search)
            .should('have.attr', 'placeholder', 'Search')
        // Search Term 1
        cy.get(selectors.search).type('Number: 2')
        cy.ticketsExistInColumn(selectors.column1.title, 
            [
                selectors.column1.title+inputText+'2'
            ], 1, selectors.column1.color)
        cy.ticketsExistInColumn(selectors.column2.title, 
            [], 0, selectors.column2.color)
        cy.ticketsExistInColumn(selectors.column3.title, 
            [
                selectors.column3.title+inputText+'2'
            ], 1, selectors.column3.color)
        // Search term 2
        cy.get(selectors.search).type('{backSpace}1')
        cy.ticketsExistInColumn(selectors.column1.title, 
            [
                selectors.column1.title+inputText+'1'
            ], 1, selectors.column1.color)
        cy.ticketsExistInColumn(selectors.column2.title, 
            [
                selectors.column2.title+inputText+'1'
            ], 1, selectors.column2.color)
        cy.ticketsExistInColumn(selectors.column3.title, 
            [
                selectors.column3.title+inputText+'1'
            ], 1, selectors.column3.color)
        // Search term 3
        cy.get(selectors.search).type('{selectAll}ticket')
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
        // Search term 4
        cy.get(selectors.search).type('{selectAll}Not existing term')
        cy.ticketsExistInColumn(selectors.column1.title, 
            [], 0, selectors.column1.color)
        cy.ticketsExistInColumn(selectors.column2.title, 
            [], 0, selectors.column2.color)
        cy.ticketsExistInColumn(selectors.column3.title, 
            [], 0, selectors.column3.color)
    })

    // searchAndAssert command is not working when the search results are 0
    // it.only('Type into search and check if all visible tickets contain that term', () => {
    //     cy.searchAndAssert('2')
    //     cy.searchAndAssert('3')
    //     cy.searchAndAssert('Progress')
    //     cy.searchAndAssert('not existing term')
    // })
})