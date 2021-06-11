$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("A1.feature");
formatter.feature({
  "line": 1,
  "name": "Register and send message functionality",
  "description": "",
  "id": "register-and-send-message-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "Register a new user and send a message",
  "description": "",
  "id": "register-and-send-message-functionality;register-a-new-user-and-send-a-message",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User selects course type",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enter firstname \"\u003cFirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter lastname \"\u003cLastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter emailid \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter username \"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter password \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter confirm password \"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify the Registration confirmation message and firstname \"\u003cFirstName\u003e\" and lastname \"\u003cLastName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Open the profile dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate the email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Inbox link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click on Compose message icon",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters Send to email \"\u003cSendToEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user enters Subject \"\u003cSubject\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user enters Message to be sent \"\u003cMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks on Send message button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Message sent and verify the acknowledgement",
  "keyword": "And "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "register-and-send-message-functionality;register-a-new-user-and-send-a-message;",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "email",
        "username",
        "Password",
        "ConfirmPassword",
        "SendToEmail",
        "Subject",
        "Message"
      ],
      "line": 29,
      "id": "register-and-send-message-functionality;register-a-new-user-and-send-a-message;;1"
    },
    {
      "cells": [
        "Deepika",
        "Mittal",
        "dee@gmail.com",
        "DRM2",
        "Password",
        "Password",
        "DM12",
        "testmail",
        "This is a test mail"
      ],
      "line": 30,
      "id": "register-and-send-message-functionality;register-a-new-user-and-send-a-message;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4451737700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "Navigate to Registration page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "User is on upskills Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on Sign Up link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Registration Page should display",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsA1.user_is_on_upskills_Home_Page()"
});
formatter.result({
  "duration": 9414417400,
  "status": "passed"
});
formatter.match({
  "location": "StepsA1.user_click_on_Sign_Up_link()"
});
formatter.result({
  "duration": 11263051300,
  "status": "passed"
});
formatter.match({
  "location": "StepsA1.registration_Page_should_display()"
});
formatter.result({
  "duration": 14760700,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Register a new user and send a message",
  "description": "",
  "id": "register-and-send-message-functionality;register-a-new-user-and-send-a-message;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "User selects course type",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User enter firstname \"Deepika\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter lastname \"Mittal\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User enter emailid \"dee@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enter username \"DRM2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enter password \"Password\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User enter confirm password \"Password\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User clicks on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "verify the Registration confirmation message and firstname \"Deepika\" and lastname \"Mittal\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Open the profile dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Validate the email \"dee@gmail.com\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User click on Inbox link",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User click on Compose message icon",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters Send to email \"DM12\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user enters Subject \"testmail\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user enters Message to be sent \"This is a test mail\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User clicks on Send message button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Message sent and verify the acknowledgement",
  "keyword": "And "
});
formatter.match({
  "location": "StepsA1.user_selects_course_type()"
});
formatter.result({
  "duration": 103900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deepika",
      "offset": 22
    }
  ],
  "location": "StepsA1.user_enter_firstname(String)"
});
formatter.result({
  "duration": 342687300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mittal",
      "offset": 21
    }
  ],
  "location": "StepsA1.user_enter_lastname(String)"
});
formatter.result({
  "duration": 222792400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dee@gmail.com",
      "offset": 20
    }
  ],
  "location": "StepsA1.user_enter_emailid(String)"
});
formatter.result({
  "duration": 176569500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DRM2",
      "offset": 21
    }
  ],
  "location": "StepsA1.user_enter_username(String)"
});
formatter.result({
  "duration": 128038400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 21
    }
  ],
  "location": "StepsA1.user_enter_password(String)"
});
formatter.result({
  "duration": 160300000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password",
      "offset": 29
    }
  ],
  "location": "StepsA1.user_enter_confirm_password(String)"
});
formatter.result({
  "duration": 244944600,
  "status": "passed"
});
formatter.match({
  "location": "StepsA1.user_clicks_on_Register_button()"
});
formatter.result({
  "duration": 2309282600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deepika",
      "offset": 60
    },
    {
      "val": "Mittal",
      "offset": 83
    }
  ],
  "location": "StepsA1.verify_the_Registration_confirmation_message_and_firstname_and_lastname(String,String)"
});
formatter.result({
  "duration": 61000500,
  "status": "passed"
});
formatter.match({
  "location": "StepsA1.open_the_profile_dropdown()"
});
formatter.result({
  "duration": 269728700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dee@gmail.com",
      "offset": 20
    }
  ],
  "location": "StepsA1.validate_the_email(String)"
});
formatter.result({
  "duration": 119437700,
  "status": "passed"
});
formatter.match({
  "location": "StepsA1.user_click_on_Inbox_link()"
});
formatter.result({
  "duration": 3287398500,
  "status": "passed"
});
formatter.match({
  "location": "StepsA1.user_click_on_Compose_message_icon()"
});
formatter.result({
  "duration": 3277008400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DM12",
      "offset": 27
    }
  ],
  "location": "StepsA1.user_enters_Send_to_email(String)"
});
formatter.result({
  "duration": 5528474900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testmail",
      "offset": 21
    }
  ],
  "location": "StepsA1.user_enters_Subject(String)"
});
formatter.result({
  "duration": 233126200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "This is a test mail",
      "offset": 32
    }
  ],
  "location": "StepsA1.user_enters_Message_to_be_sent(String)"
});
formatter.result({
  "duration": 483530600,
  "status": "passed"
});
formatter.match({
  "location": "StepsA1.user_clicks_on_Send_message_button()"
});
formatter.result({
  "duration": 2196426900,
  "status": "passed"
});
formatter.match({
  "location": "StepsA1.message_sent_and_verify_the_acknowledgement()"
});
formatter.result({
  "duration": 179682300,
  "status": "passed"
});
formatter.after({
  "duration": 939408300,
  "status": "passed"
});
});