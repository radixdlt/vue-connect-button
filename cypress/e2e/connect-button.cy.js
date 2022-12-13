// https://docs.cypress.io/api/introduction/api.html

describe("Radix Connect Button", () => {
  it("should be rendered", () => {
    cy.visit("/");
    cy.get("radix-connect-button").shadow().contains("Connect");
  });

  it("should open / hide popover on click", () => {
    cy.visit("/");
    const button = cy
      .get("radix-connect-button")
      .find("radix-button", {
        includeShadowDom: true,
      })
      .find("button", { includeShadowDom: true });

    cy.get("radix-connect-button")
      .shadow()
      .find("radix-popover")
      .should("not.exist");
    button.then(([rawElement]) => {
      rawElement.click();
      cy.get("radix-connect-button")
        .shadow()
        .find("radix-popover")
        .should("exist");
      cy.get("#app").trigger("click");
      cy.get("radix-connect-button")
        .shadow()
        .find("radix-popover")
        .should("not.exist");
    });
  });

  it('should show loading indicator after "connect now" click', () => {
    cy.visit("/");
    const button = cy
      .get("radix-connect-button")
      .find("radix-button", {
        includeShadowDom: true,
      })
      .find("button", { includeShadowDom: true });

    button.then(([rawElement]) => {
      rawElement.click();
      cy.get("radix-connect-button")
        .find("radix-popover", {
          includeShadowDom: true,
        })
        .find("radix-button", {
          includeShadowDom: true,
        })
        .find("button", {
          includeShadowDom: true,
        })
        .then(([connectNowButton]) => {
          connectNowButton.click();
          cy.get("radix-connect-button")
            .shadow()
            .find("radix-button")
            .shadow()
            .find("loading-spinner")
            .should("exist");
        });
    });
  });
});
