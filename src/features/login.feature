Feature: Log into Tello mobile application

  Scenario: As a user, I can log into my account

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password  | 
      | Igard    | Igard123  | 
      | Imana    | Imana123  | 
