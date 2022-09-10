Feature: Search Song
  Scenario: visiting the home page and follow carousel
    When I visit page and search
    Then I can not see the live search
    Then I type into the input
    Then I should see live search
