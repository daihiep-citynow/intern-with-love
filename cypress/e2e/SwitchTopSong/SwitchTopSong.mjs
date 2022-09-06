import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit page", () => {
  cy.viewport("macbook-16");
  cy.visit("http://localhost:3000");
});

Then("I click into American Top Song", () => {
  cy.get('div[class*="TopSongNav_right-box-nav-item"]:last-child').click();
});

Then("I can see American Song", () => {
  cy.get('span[class*="SongItem_top-song-item-title-artist"]').first().contains("BlackPink");
});
