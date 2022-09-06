import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit the page", () => {
  cy.viewport("macbook-16");
  cy.visit("http://localhost:3000");
});

Then("I scroll into top video and click", () => {
  cy.get('span[class*="VideoItem_top-video-item-title-name"]')
    .first()
    .parent()
    .scrollIntoView()
    .click();
});
