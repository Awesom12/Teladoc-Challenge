Feature: As an Engr. Candidate1
    I need to automate http://www.way2automation.com/angularjs-protractor/webtables/
    So that I can show my awesome automation skills

    Background:
        Given I am on webtables page

    Scenario: Add a user and Validate the user that has been added to the table
        When I click on Add User button
        When I enter User info on Add User form
        And I click on save button
        Then Validate the user that has been added to the table

    Scenario: Delete the said user from the table and validate that the user has been deleted.
        When The user with username that needs to be deleted exists on the table
        When I click on Delete User button on the row which contains the user that needs to be deleted
        When I confirm to delete the user that needs to be deleted
        Then Validate the user has been deleted from the table