describe('Header Component', () => {
    beforeEach(() => {
        cy.visit('/'); // Update with the correct route where the Header component is rendered
    });

    it('should display the logo and navigation in both desktop and mobile views', () => {
        // Desktop view
        cy.viewport(1980, 1440);
        cy.get('[data-test="site-logo"]').should('be.visible');
        cy.get('[data-test="hamburger-menu"]').should('not.be.visible');
        cy.get('[data-test="nav-home"]').should('be.visible');

        // Mobile view
        cy.viewport('iphone-xr');
        cy.get('[data-test="site-logo"]').should('be.visible');
        cy.get('[data-test="hamburger-menu"]').should('be.visible');
        cy.get('[data-test="nav-home"]').should('not.be.visible');
    });

    it('mobile - should toggle navigation menu', () => {
        cy.viewport('iphone-xr');
        cy.get('[data-test="hamburger-menu"]').click();
        cy.get('[data-test="nav-home"]').should('be.visible');
        cy.get('[data-test="hamburger-menu"]').click();
        cy.get('[data-test="nav-home"]').should('not.be.visible');
    });

    it('should navigate to the correct section ', () => {
        cy.viewport(1980, 1440);
        cy.get('#about').should('exist');
        cy.get('[data-test="nav-about"]').click();
        cy.get('#about').should('be.visible');
    });
    it('mobile - should navigate to the correct section ', () => {
        cy.viewport('iphone-xr');
        cy.get('[data-test="hamburger-menu"]').click();
        cy.get('#about').should('exist');
        cy.get('[data-test="nav-about"]').click();
        cy.get('#about').should('be.visible');
    });

    it('should display social media icons and have correct links', () => {
        const socialMediaLinks = {
            linkedin: "https://www.linkedin.com/in/gyorgy-botond/",
            github: "https://www.github.com/gzbottii",
            instagram: "https://www.instagram.com/gzbotii/",
        };

        cy.get('[data-test="linkedin"]').should('have.attr', 'href', socialMediaLinks.linkedin);
        cy.get('[data-test="instagram"]').should('have.attr', 'href', socialMediaLinks.instagram);
        cy.get('[data-test="github"]').should('have.attr', 'href', socialMediaLinks.github);
    });
});