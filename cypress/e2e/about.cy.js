describe("Home Component Tests", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should render 10 work experience entries", () => {
        cy.get('[data-test="work-experience"]')
            .find('> *') // Select all direct children
            .should('have.length', 11); // Assert that there are 10
    });
});