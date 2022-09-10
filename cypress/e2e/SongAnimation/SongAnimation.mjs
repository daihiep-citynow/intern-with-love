import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit page and scroll to Hot Song and hover it", () => {
  cy.viewport("macbook-16");
  cy.visit("http://localhost:3000");
});

Then("I can see heart and play button", () => {
  cy.get('span[class*="HotSongItem_item-title"]').first().trigger("hover");
});
