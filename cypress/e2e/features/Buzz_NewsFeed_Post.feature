Feature: Posting in Buzz NewsFeed

    Scenario: Verify whether the user able to Post in the Buzz Newsfeed

        Given a user is in the Homepage
        When the user clciks on Buzz Tab
        Then the Buzz Newsfeed page should appear 
        When user enters some random thoughts in the input field
        And clicks on Post button
        Then post should be updated in the Buzz feed
