import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit page and search", () => {
  cy.viewport("macbook-16");
  cy.visit("http://localhost:3000");
});

Then("I can not see the live search", () => {
  cy.get("#tippy-1").should("not.exist");
});

Then("I type into the input", () => {
  cy.get("input").type("hello bro");
});

Then("I should see live search", () => {
  cy.get("#tippy-1").should("be.visible");
});
