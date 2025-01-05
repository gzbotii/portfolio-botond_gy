describe("Work entries", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("should render 11 work experiences", () => {
        cy.get('[data-test="work-experience"]')
            .find('> *') // Select all direct children
            .should('have.length', 11); // Assert that there are 10
    });
});