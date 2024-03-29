// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// simplier than using the loop
import { times } from 'lodash'
// cypress's plugin for drag and drop
import '@4tw/cypress-drag-drop'

// Creation of 1 new Ticket in desired column "column"(string), with desired text "text"(string) and ticket cackground color "color"(rgb()) -> 
// and assertions of: focus after click on "+", also that there is only 1 ticket in the column and it has the corresponding text and color
// IT CAN BE REPLACED WITH  "addMultipleTickets" - CURRENTLY ONLY USED IN "pageRefresh.js"
Cypress.Commands.add('newTicket', (column, text, color) => {
    cy.log('Add new ticket')
        //Add new ticket with the text
        cy.get('h2')
        .contains(column)
        .siblings('[data-testid="add-ticket-button"]')
        .click()
        .parent()
        .siblings()
        .find('[data-testid="ticket"]')
        .first()
        .find('textarea')
        .should('have.focus')
        .type(text+'{Enter}')
        .wait(300)
        cy.get('h2')
        .contains(column)
        .parents('[data-testid="column"]')
        .find('[data-testid="ticket"]')
        .each((ticket, i) => {
            cy.wrap(ticket).should('have.length', 1)
            .find('span')
            .should('have.text', '✕'+text)
            .parent()
            .and('have.css', 'background-color', color)
        })
})

// Assertion of desired column "column"(string) if it has expected number of tickets "numOfTickets"(int) -> 
// text per ticket "text"(list) and -> 
// ticket background color "color"(rgb())
Cypress.Commands.add('ticketsExistInColumn', (column, text, numOfTickets, color) => {
    cy.get('h2')
        .contains(column)
        .parents('[data-testid="column"]')
        .find('[data-testid="ticket"]')
        .should('have.length', numOfTickets)
        .each((ticket, i) => {
            cy.wrap(ticket)
            .find('span')
            .should('have.text', '✕'+text[i])
            .parent()
            .should('have.css', 'background-color', color)
        })
})

// Fast creation of desired number of tickets "numOfTimes"(int), per column "column"(string) -> 
// just clicking on "+" button
Cypress.Commands.add('clickOnAddButton', (column, numOfTimes) => {
    times(numOfTimes, () => {
        cy.get('h2')
        .contains(column)
        .siblings('[data-testid="add-ticket-button"]')
        .click()
    })
})

// Check if the number of tickets "num"(int), in Column Header, beneath the Column Title, number in parentheses, ->
// is as expected, per desired column "column"(string)
Cypress.Commands.add('ticketNumber', (column, num) => {
    cy.get('h2')
        .contains(column)
        .parent()
        .find('div')
        .should('contain', num)
})

// Create multiple tickets per 1 column
// "column"(string) - which column
// "text"(string) - what text
// "numOfTimes"(int) - how many tickets to be created in desired column
// "counter"(int) - with what number to start naming the tickets (this number is added at the end of text description "text"+"counter" and increments through the iteration) ->
// ex. if "counter" = 3 and "numOfTimes" = 2, then 2 tickets are created with added descriptions -> ticket1: "text"+3, ticket2: "text"+4 ->
// if 0, no number is added at the end of the ticket description, only "text"
Cypress.Commands.add('addMultipleTickets', (column, text, numOfTimes, counter) => {
    times(numOfTimes, () => {
        const textArea = cy.get('h2')
        .contains(column)
        .siblings('[data-testid="add-ticket-button"]')
        .click()
        .parent()
        .siblings()
        .find('[data-testid="ticket"]')
        .first()
        .find('textarea')
        .should('have.focus')
        if(counter !== 0){
            textArea.type(text+counter+'{Enter}')
            counter++
        }
        else{
            textArea.type(text+'{Enter}')
        }
    })
})

// Using cypress plugin for drag and drop -> 
// find the element by "text"(string) ->
// and drag it to desired "column"(string)
Cypress.Commands.add('dragDrop', (column, text) => {
    cy.get('span')
        .contains(text)
        .parent()
        .then( grab => {
            cy.get('h2')
            .contains(column)
            .parent()
            .siblings()
            .then( dropTo => {
                cy.get(grab).drag(dropTo)
            })
        })
})

// Edit existing ticket
// Double click on the ticket and append the text
// "column"(string) - expect ticket in this column, when asseting
// "inputText" - search ticket that has this text (any from existing tickets)  
// "editText" - text that will be typed/appended to the text of the searched ticket
// "ticketIndex" - when asserting, this is the number of the ticket (edited ticket), in the column, from top to bottom (ex. if you have 4 tickets in column and you want to edit the last one in the bottom, you'll put number 4)
Cypress.Commands.add('editTicket', (column, inputText, editText, ticketIndex) => {
    cy.get('h2')
        .contains(column)
        .parents('[data-testid="column"]')
        .find('span')
        .contains(inputText)
        .dblclick()
        .get('textarea')
        .contains(inputText)
        .type(editText+'{enter}')
    cy.get('h2')
        .contains(column)
        .parent()
        .siblings()
        .find('[data-testid="ticket"]')
        .then( ticket => {
            cy.wrap(ticket[ticketIndex-1])
            .find('.sc-AxhCb')
            .should('have.text', inputText+editText)
        })
})

// Hover the ticket with provided "text"(string)
// Working if all the tickets on the board have unique text
Cypress.Commands.add('hoverTicket', (text) => {
    cy.get('span')
            .contains(text)
            .parent()
            .find('button')
            .should('not.be.visible')
            .parent()
            .realHover()
            .find('button')
            .should('be.visible')
})

// not working because when no '[data-testid="ticket"]' are found, cy.get('[data-testid="ticket"]') is trying to find it :(  ..will invest some extra time to investigation :) 
// Cypress.Commands.add('searchAndAssert', (searchTerm)=>{
//     cy.get('[data-testid="search"]').type('{selectAll}'+searchTerm)
//     cy.get('[data-testid="ticket"]')
//         .then(ticket=>{
//             if(ticket.length !== 0){
//                 cy.wrap(ticket).each(ticket=>{
//                     cy.wrap(ticket).should('contain', searchTerm)

//                 })
//             }
//             else{
//                 cy.wrap(ticket).should('not.exist')
//             }
//         })
// })
