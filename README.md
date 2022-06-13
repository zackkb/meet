# meet

A serverless, progressive web app (PWA) built with React using test-driven development (TDD). An application for users to find events based on their location. The app also utilizes Google Calendar API

## Feature 2: Show/Hide or Expand/Collapse list of events.

As a user,
I should be able to expand/collapse a list of events
So that events are displayed/hidden

        Scenario 1: An event element is collapsed by default
    	- Given the user has not clicked to search for events
    	- When the user has not clicked on any event element
    	- Then the event details are collapsed

        Scenario 2: User can expand an event to see its details
    	- Given the user has clicked to search for events
    	- When the user clicks on the event element

- Then the event details are expanded and displayed

  Scenario 3: User can collapse an event to hide its details

- Given the user no longer wants to see event details
- When the user clicks on details
- Then the event details collapse

## Feature 3: Specify number of events

As a user,
I should be able to specify the number of events displayed
so I can view how many events are in my area

        Scenario 1: When user hasn’t specified a number, 32 is the default number
    	- Given the user has not specified the number of events
    	- When a user searches for events
    	- Then the default number of 32 searches are displayed

        Scenario 2: User can change the number of events they want to see
    	- Given the user wants to change the number of events displayed
    	- When the user selects the number of events
    	- Then the number of selected events are displayed

## Feature 4: Use the app when offline

As a user,
I should be able to view information offline
So I can still use the app without an internet connection.

        Scenario 1: Show cached data when there’s no internet connection
    	- Given the user has no internet connection
    	- When the user wants to use the app offline
    	- Then cached data will be displayed

        Scenario 2: Show error when user changes the settings (city, time range)
    	- Given the user wants to change the settings
    	- When the user attempts to change the settings
    	- Then an error will be displayed

## Feature 5: Data visualization

As a user,
I should be able to see a chart of upcoming events in each city
So that upcoming events are displayed in organized detail.

        Scenario 1: Show a chart with the number of upcoming events in each city
    	- Given the user wants to see a list of upcoming events in each city
    	- When a user views a chart with listed events
    	- Then a chart with events in each city is displayed
