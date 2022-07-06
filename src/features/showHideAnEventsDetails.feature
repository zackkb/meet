Feature: Show/hide event details

    Scenario: An event element is collapsed by default.
        Given user's search resulted in event elements by chosen city
        When user sees event elements
        Then user should see the collapsed by default event element

    Scenario: User can expand an event to see its details.
        Given user did not expand an event element to see more details
        When user expands an event element
        Then user should see more details of an event element

    Scenario: User can collapse an event to hide its details.
        Given the user did not collapse an event element
        When the user collapses an event element
        Then user should see less details of an event element