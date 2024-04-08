import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on the webtables page', () => {
    cy.visit('/angularjs-protractor/webtables/')
})

//Scenario : Add multiple invalid users and Validate that they are not added to the table

When('I click on the Add User button', () => {
    cy.contains(" Add User").click()
})

When('I enter {string} in the First Name field', (FirstName) => {
    cy.get('input[name=FirstName]').type(`${FirstName}`)
})

When('I enter {string} in the User Name field', (UserName) => {
    cy.get('input[name=UserName]').type(`${UserName}`)
})

When('I select {string} from the dropdown', (Role) => {
    cy.get('select[name=RoleId]').select(`${Role}`)
})

When('I enter {string} in the Cell Phone field', (Mobilephone) => {
    cy.get('input[name=Mobilephone]').type(`${Mobilephone}`)
})

When('I click on the button to save', () => {
    cy.contains('button', 'Save').click()
})

Then('Validate that the {string} is not added to the table', (FirstName) => {
    cy.get('.smart-table').within(() => {
        cy.get('tbody tr')
            .first()
            .children('td')
            .first()
            .should('not.have.text', FirstName)
    })
})