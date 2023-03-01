class LoginPageModel {

    elements = {
        email: () => cy.get('input[placeholder="Email"]'),
        password: () => cy.get('input[placeholder="Password"]'),
        button: () => cy.get('button[class^="btn"]'),
        invalidErrorLoginMessage :()=> cy.get('.error-messages')
    }

    verifyHomePage() {
        cy.contains('conduit').should('be.visible')
    }

    clickSignInLink() {
        cy.contains('Sign in').click()
    }
    enterLoginDetails() {
        cy.fixture('example.json').then((user) => {
            this.elements.email().type(user.user1.email)
            this.elements.password().type(user.user1.password)
        })
        this.clickSignInButton()
    }
    clickSignInButton() {
        this.elements.button().click()

    }

    invalidLogin(){
        cy.fixture('example.json').then((user)=>{
            this.elements.email().type(user.user2.email)
            this.elements.password().type(user.user2.password)
        })
        this.clickSignInButton()

    }

    verifyInvalidLoginErrorMessage(){
        this.elements.invalidErrorLoginMessage().should('contain.text', ' email or password is invalid ')
    }

}

module.exports = new LoginPageModel()