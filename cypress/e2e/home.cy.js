describe("Home Component Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders the main heading", () => {
    cy.get('[data-test="main-heading"]')
      .should("contain.text", "My name is Botond Gyorgy")
      .and("be.visible");
  });

  it("renders the tagline", () => {
    cy.get('[data-test="tagline"]')
      .should("contain.text", "Technical Project Director") // Replace with the actual tagline
      .and("be.visible");
  });

  it("renders the profile image", () => {
    cy.get('[data-test="profile-image"]')
      .should("be.visible")
      .and("have.attr", "src")
      .and("include", "profile");
  });
});

describe("Home Component - Responsiveness", () => {
  const viewports = ["iphone-xr", "macbook-13", [1920, 1080]];

  viewports.forEach((viewport) => {
    it(`renders correctly on ${viewport} viewport`, () => {
      if (Array.isArray(viewport)) {
        cy.viewport(viewport[0], viewport[1]);
      } else {
        cy.viewport(viewport);
      }
      cy.visit("/"); // Revisit to apply the viewport
      cy.get('[data-test="main-heading"]').should("be.visible");
      cy.get('[data-test="profile-image"]').should("be.visible");
    });
  });
});

describe("Home Component - Animations", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("animates the main heading into view", () => {
    cy.get('[data-test="main-heading"]')
      .should("have.css", "opacity", "1")
  });

  it("animates the profile image into view", () => {
    cy.get('[data-test="profile-image"]')
      .should("have.css", "opacity", "1"); // After animation
  });
});