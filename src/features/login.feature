Feature: Log into Tello mobile application

  Scenario Outline: The User can't log in with non-existing credentials

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

  Scenario Outline: Log in with different type account
    Given The <User> navigate to the login page
    When The <User> login
    Then System should not allow access to <User>
    And The <User> log out

    Examples:
      | User            |
      | admin           |
      | operator        |
      | guard           |
      | supervisor      |
      | dispatcher      |
      | customerManager |

# Scenario Outline: Log in without internet
#   Given
#   When
#   Then

# Scenario Outline: Log out
#   When
#   Then

#   Examples:

# Scenario Outline: Log out without internet
#   Given
#   When
#   Then

# Scenario Outline: General
#   Given
#   When
#   Then
