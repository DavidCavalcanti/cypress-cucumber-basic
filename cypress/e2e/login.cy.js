describe("login teste", () => {
  it("Sucesso login", () => {
    cy.visit("/");
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
  });
});
