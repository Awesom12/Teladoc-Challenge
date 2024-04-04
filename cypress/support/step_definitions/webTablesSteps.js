import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on webtables page', () => {
    cy.visit('/angularjs-protractor/webtables/')
})

//Scenario 1 : Add a user and Validate the user that has been added to the table

When('I click on Add User button', () => {
    cy.contains(" Add User").click()
})

When('I enter User info on Add User form', () => {
    cy.fixture('user.json').then((user) => {
        cy.get('input[name=FirstName]').type(user.FirstName)
        cy.get('input[name=UserName]').type(user.UserName)
        cy.get('input[type=radio]').first().check()  //check Company AAA of the field Customer
        cy.get('select[name=RoleId]').select(user.Role)
        cy.get('input[name=Mobilephone]').type(user.Mobilephone)
    })
})

When('I click on save button', () => {
    cy.contains('button', 'Save').click()
})

Then('Validate the user that has been added to the table', () => {
    cy.fixture('user.json').then((user) => {
        cy.get('.smart-table').within(() => {
            cy.get('tbody tr')
                .first()
                .children('td')
                .first()
                .should('have.text', user.FirstName)
        })
    })
})

//Scenario 2 : Delete the said user from the table and validate that the user has been deleted

When('The user with username that needs to be deleted exists on the table', () => {
    cy.fixture('user.json').then((user) => {
        cy.contains('td', user.deleteUser)
            .should('exist')
    })
})

When('I click on Delete User button on the row which contains the user that needs to be deleted', () => {
    cy.fixture('user.json').then((user) => {
        cy.contains('td', user.deleteUser)
            .parent()
            .children()
            .last()
            .click()
    })
})

When('I confirm to delete the user that needs to be deleted', () => {
    cy.contains('button', 'OK')
        .click()
})

Then('Validate the user has been deleted from the table', () => {
    cy.fixture('user.json').then((user) => {
        cy.contains('td', user.deleteUser)
            .should('not.exist')
    })
})