Feature: As an Engr. Candidate2
    I need to automate http://www.way2automation.com/angularjs-protractor/webtables/
    So that I can show my awesome automation skills

    Background:
        Given I am on webtables app

    Scenario: Add a user and Validate the user that has been added to the table
        When  I click on the button: Add User

        When I enter User info from the dataTable on Add User form
            | FirstName | LastName | UserName | Password | Role     | Email           | Mobilephone |
            | TestUser1 | Perfect  | Kitty    | Secret   | Customer | abc123@fake.com | 9876543210  |

        And I click on the save button
        Then Validate that "<FirstName>" has been added to the table

        Examples:
            | FirstName |
            | TestUser1 |


    Scenario: Delete the said user from the table and validate that the user has been deleted.
        When The "<UserToBeDeleted>" exists on the table
        When I click on Delete User button on the row which contains the "<UserToBeDeleted>"
        When I confirm to delete the user that has to be deleted
        Then Validate that the "<UserDeleted>" from the table

        Examples:
            | UserToBeDeleted |  | UserDeleted |
            | novak           |  | novak       |
