/// <reference types='cypress' />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"
import { LoginLocators } from '../../PageObjects/LoginLocators'
import { LoginResource } from "../../PageObjects/LoginResource"
import { Constants } from "../../Lib/Constants";
import { Buzz_Feed_Locators } from "../../PageObjects/Buzz_Feed_Locators"

// import { env } from "process"


Cypress.config()
 
let LoginResources = new LoginResource()

Given("a user is in the Homepage", () => {

    LoginResources.loginUser()

});

When("the user clciks on Buzz Tab", () => {

    cy.xpath(Buzz_Feed_Locators.BuzzTab).click();

});

Then("the Buzz Newsfeed page should appear", () => {

    cy.url().should('include',Constants.Buzz_Feed_URL)
    cy.wait(3000)

});

When("user enters some random thoughts in the input field", () => {

    cy.xpath(Buzz_Feed_Locators.Buzz_Input_field).type(Constants.Test_Post, { force: true });
    cy.wait(3000)
});

And("clicks on Post button", () => {

    cy.xpath(Buzz_Feed_Locators.Buzz_Post_Button).click();
    cy.wait(3000)
});

Then("post should be updated in the Buzz feed", () => {

    cy.xpath(Buzz_Feed_Locators.NewsFeed_First_Feed).contains(Constants.Test_Post)

});
