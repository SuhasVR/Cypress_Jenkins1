import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import { LoginLocators } from "../PageObjects/LoginLocators";
import { Constants } from "../Lib/Constants";


export class LoginResource {

  loginUrl() {

    //cy.visit(Constants.DEV_URL)
    cy.visit(Cypress.env('test_url'))
    cy.wait(3000)

  }


  loginUser() {

    cy.visit(Constants.Login_URL)

    //cy.visit(Cypress.env('test_url'))
    cy.wait(3000)

    // cy.xpath(LoginLocators.inputUsername).type(Constants.USER_NAME, { force: true });
    // cy.xpath(LoginLocators.inputPassword).type(Constants.PASSWORD, { force: true });

    cy.xpath(LoginLocators.inputUsername).type(Cypress.env('username'), { force: true })
     cy.xpath(LoginLocators.inputPassword).type(Cypress.env('password'), { force: true })


    cy.xpath(LoginLocators.loginButton).click();
    cy.wait(5000);

    cy.url().should('include',Constants.Homepage_URL)

    //cy.url().should('include',Cypress.env('Homepage_URL'))
  }

  logout(){

    cy.xpath(LoginLocators.logoutOption).click({ force: true });
    cy.xpath(LoginLocators.logoutButton).click({ force: true });
    cy.wait(5000)
  }
}

 