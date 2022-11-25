Feature: Log into Tello mobile application

  Scenario: The User can't log in with non-existing credentials

    Given The <User> navigate to the login page
    When The <User> login
    Then System should not allow access to <User>


    Examples:
      | User                     |
      | userWithFakeCredentials  |
      | userWithFakePassword     |
      | userWithFakeUserName     |
      | userWithEmptyCredentials |
      | userWithEmptyPasswsord   |
      | userWithEmptyUserName    |
