Feature: Recurso de login

    Feature: Recurso necessário para um usuário fazer login

    Scenario: Login com sucesso
        Given Um usuário abre a página de login
        When Um usário insere seu nome de usuário "standard_user"
        And Um usuário insere sua senha "secret_sauce"
        And Um usuário click no botão de login
        Then Um usuário será logado