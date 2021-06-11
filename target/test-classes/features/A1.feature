Feature: Register and send message functionality

  Background: Navigate to Registration page
    Given User is on upskills Home Page
    When User click on Sign Up link
    Then Registration Page should display

  Scenario Outline: Register a new user and send a message
    When User selects course type
    And User enter firstname "<FirstName>"
    And User enter lastname "<LastName>"
    And User enter emailid "<email>"
    And User enter username "<username>"
    And User enter password "<Password>"
    And User enter confirm password "<ConfirmPassword>"
    And User clicks on Register button
    Then verify the Registration confirmation message and firstname "<FirstName>" and lastname "<LastName>"
    And Open the profile dropdown
    And Validate the email "<email>"
    And User click on Inbox link
    And User click on Compose message icon
    And User enters Send to email "<SendToEmail>"
    And user enters Subject "<Subject>"
    And user enters Message to be sent "<Message>"
    And User clicks on Send message button
    And Message sent and verify the acknowledgement

    Examples: 
      | FirstName | LastName | email         | username | Password | ConfirmPassword | SendToEmail | Subject  | Message             |
      | Deepika   | Mittal   | dee@gmail.com | DRM3    | Password | Password        | DM12         | testmail | This is a test mail |
