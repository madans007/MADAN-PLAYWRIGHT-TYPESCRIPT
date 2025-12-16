
@Regression
Feature: Sample end to end flow in an ecommerce site.

  @valid
  Scenario: Add product to Shopping Cart from external test data
    Given Login to app with valid credentials
    When user navigates to Cameras page
    And user adds product "Nikon" to the cart
    Then Shopping Cart page should be displayed

