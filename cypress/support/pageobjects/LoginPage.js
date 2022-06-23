/// <reference types="cypress"/>

import LoginElements from "../elements/LoginElements";
const loginElements = new LoginElements();

class LoginPage {
  // Acessar página de login
  acessarSite() {
    cy.visit("/");
  }
  inserirNomeUsuario(nomeUsuario) {
    cy.get(loginElements.inserirNomeUsuario()).type(nomeUsuario);
  }

  inserirSenhaUsuario(senhaUsuario) {
    cy.get(loginElements.inserirSenhaUsuario()).type(senhaUsuario);
  }

  clicarBotaoLogin() {
    cy.get(loginElements.clicarBotaoLogin()).click();
  }

  verificarLogin() {
    cy.url().should("contains", "/inventory.html");    
  }
}

export default LoginPage;
