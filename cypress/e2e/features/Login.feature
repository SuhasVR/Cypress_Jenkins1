Feature: Login

    Scenario: Verify whether the user able to login

        Given a user navigates to correct URL
        When the user enters the USERNAME and PASSWORD
        And click LOGIN button
        Then the user should be able to navigate to the HOME page
        When user clicks Log out Button
        Then the User should logged out
