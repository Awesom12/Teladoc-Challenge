Feature: As an Engr. Candidate3
    I need to automate http://www.way2automation.com/angularjs-protractor/webtables/
    So that I can show my awesome automation skills

    Background:
        Given I am on the webtables page

    Scenario: Add multiple invalid users and Validate that they are not added to the table
        When I click on the Add User button
        When I enter "<FirstName>" in the First Name field
        And I enter "<UserName>" in the User Name field
        And I select "<Role>" from the dropdown
        And I enter "<Mobilephone>" in the Cell Phone field
        And I click on the button to save
        Then Validate that the "<FirstName>" is not added to the table

        Examples:
            | FirstName | UserName | Role  | Mobilephone |
            | !@#$%^^^^ | Smith    | Admin | 9876543210  |
            | TestUser3 | 12963458 | Admin | 9876543210  |
            | TestUser3 | Smith    | Admin | abcdefg     |
