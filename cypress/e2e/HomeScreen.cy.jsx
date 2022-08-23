describe("empty spec", () => {
  it("should navigate to the about page", () => {
    cy.viewport("macbook-16");
    cy.visit("http://localhost:3000/setting");
    cy.visit("http://localhost:3000");
  });
});
