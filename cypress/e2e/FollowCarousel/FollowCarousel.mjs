import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit page", () => {
  cy.viewport("macbook-16");
  cy.visit("http://localhost:3000");
});

Then("I see the 6 images and change after every 2s", () => {
  cy.get(".slick-dots li").should("have.length", 6);
  cy.get(".slick-dots li:first-child").should("have.class", "slick-active");
  // eslint-disable-next-line cypress/no-unnecessary-waiting
  cy.wait(3000);
  cy.get(".slick-dots li:first-child").should("not.have.class", "slick-active");
});
