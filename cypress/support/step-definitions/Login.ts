/// <reference types='cypress' />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import { LoginLocators } from '../../PageObjects/LoginLocators'
import { LoginResource } from "../../PageObjects/LoginResource"
import { Constants } from "../../Lib/Constants";
// import { env } from "process"


Cypress.config()
 
let LoginResources = new LoginResource()

Given("a user navigates to correct URL", () => {

  cy.visit(Constants.Login_URL)

  //cy.visit(Cypress.env('test_url'))
  cy.wait(3000)
});

When("the user enters the USERNAME and PASSWORD", () => {
  
  cy.xpath(LoginLocators.inputUsername).type(Constants.Username, { force: true });
  cy.xpath(LoginLocators.inputPassword).type(Constants.Password, { force: true });

  // cy.xpath(LoginLocators.inputUsername).type(Cypress.env('username'), { force: true })
  // cy.xpath(LoginLocators.inputPassword).type(Cypress.env('password'), { force: true })
  
});

And("click LOGIN button", () => {
  cy.xpath(LoginLocators.loginButton).click();
  cy.wait(5000);
})

Then("the user should be able to navigate to the HOME page", () => {

  cy.url().should('include',Constants.Homepage_URL)

  //cy.url().should('include',Cypress.env('Homepage_url'))
})

When("user clicks Log out Button", () => {

  cy.xpath(LoginLocators.logoutOption).click({ force: true });
  cy.xpath(LoginLocators.logoutButton).click({ force: true });
  cy.wait(3000)

  })

Then("the User should logged out", () => {

  cy.url().should('include',Constants.Login_URL)

  //cy.url().should('include',Cypress.env('test_url'))
})