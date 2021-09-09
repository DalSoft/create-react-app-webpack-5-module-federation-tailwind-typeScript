describe("Home page", () => {
    it("check copy hello friends button", () => {
        cy.visit("/");
        cy.get("[data-testid=\"helloFriendsButton\"").contains("Hello Friends 🚀");
    });
});


