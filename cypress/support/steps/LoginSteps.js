/* global Given, Then, When */

import LoginPage from "../pageobjects/LoginPage";
const loginPage = new LoginPage();

Given("Um usuário abre a página de login", () => {
  loginPage.acessarSite();
});

When("Um usário insere seu nome de usuário", (nomeUsuario) => {
  loginPage.inserirNomeUsuario(nomeUsuario);
});

And("Um usário insere seu nome de usuário", (senhaUsuario) => {
  loginPage.inserirSenhaUsuario(senhaUsuario);
});

And("Um usuário click no botão de login", () => {
    loginPage.clicarBotaoLogin();
})

Then("Um usuário será logado", () => {
  loginPage.verificarLogin();
});
