Feature: Product Search and Cart Management

Scenario Outline: Search product and manage cart

Given user navigates to Magento homepage
And user logs in again with "<email>" "<password>"
When user searches for "<product>"
And user adds the product to cart
Then product should appear in cart

When user updates product quantity to "<qty>"
Then cart quantity should be "<qty>"

When user removes the product from cart
Then cart should be empty

Examples:
| product | qty |email|password|
| Jacket  | 2   |dynamic|Password@123|