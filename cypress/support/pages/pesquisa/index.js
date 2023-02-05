import { el } from "./elements";

class searchActions {
    clickPopUpButton() {
        cy.get(el.notButton).click();
    }

    clickSelectButton() {
        cy.scrollTo("bottom");
        cy.get(el.selectFinalButton).should("be.visible");
        cy.get(el.selectFinalButton).click();
    }
};

export default new searchActions();
