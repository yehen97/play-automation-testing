Feature: User Registration and Login

Scenario Outline: Register and login with a new user

Given user navigates to Magento homepage
When user registers with "<firstname>" "<lastname>" "<email>" "<password>" "<Confirm password>"
Then registration should be successful
When user logs out
And user logs in again with "<email>" "<password>"
Then dashboard should be visible
Examples:
| firstname | lastname | email | password |Confirm password|
| Chathua      | Dasaruwa     |dynamic| Password@123 |Password@123|