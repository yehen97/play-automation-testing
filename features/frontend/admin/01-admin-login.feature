Feature: Admin Login and Orders Validation
@Test
Scenario: Admin login and check orders
  Given admin navigates to Magento admin page
  When admin logs in with username "magebit" and password "Demo123"
  When admin navigates to Orders
  