import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I am on webtables app', () => {
    cy.visit('/angularjs-protractor/webtables/')
})

//Scenario 1 : Add a user and Validate the user that has been added to the table

When('I click on the button: Add User', () => {
    cy.contains(" Add User").click()
})

When('I enter User info from the dataTable on Add User form', (datatable) => {
    //Data Tables are handy for passing a list of values to the step definition file
    //hashes() : This method returns an array of objects. Each of the data table rows is converted to an object. 
    datatable.hashes().forEach(element => {

        cy.get('input[name=FirstName]').type(element.FirstName)
        cy.get('input[name=LastName]').type(element.LastName)
        cy.get('input[name=UserName]').type(element.UserName)
        cy.get('input[name=Password]').type(element.Password)
        cy.get('input[type=radio]').last().check()  //check Company BBB of the field Customer
        cy.get('select[name=RoleId]').select(element.Role)
        cy.get('input[name=Email]').type(element.Email)
        cy.get('input[name=Mobilephone]').type(element.Mobilephone)
    })
})


When('I click on the save button', () => {
    cy.contains('button', 'Save').click()
})

Then('Validate that {string} has been added to the table', (FirstName) => {
    cy.get('.smart-table').within(() => {
        cy.get('tbody tr')
            .first()
            .children('td')
            .first()
            .should('have.text', `${FirstName}`)
    })
})

//Scenario 2 : Delete the said user from the table and validate that the user has been deleted

When('The {string} exists on the table', (UserToBeDeleted) => {
    cy.contains('td', `${UserToBeDeleted}`)
        .should('exist')
})

When('I click on Delete User button on the row which contains the {string}', (UserToBeDeleted) => {
    cy.contains('td', `${UserToBeDeleted}`)
        .parent()
        .children()
        .last()
        .click()
})

When('I confirm to delete the user that has to be deleted', () => {
    cy.contains('button', 'OK')
        .click()
})

Then('Validate that the {string} from the table', (UserDeleted) => {
    cy.contains('td', `${UserDeleted}`)
        .should('not.exist')
})
