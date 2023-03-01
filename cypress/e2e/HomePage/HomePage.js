/// <reference types ='cypress'/>


import loginPage from "../Models/LoginPageModel"
import homePage from "../Models/HomePageModel"


describe("Login Page suite", function () {

    beforeEach(function () {
        cy.visit(Cypress.env('url'))
    })

    it('Invalid Login', function () {
        loginPage.clickSignInLink()
        loginPage.invalidLogin()
        loginPage.verifyInvalidLoginErrorMessage()

    })

    it('No Feed verify message', function () {
        loginPage.clickSignInLink()
        loginPage.enterLoginDetails()
        homePage.verifyNoFeedMessage(' niship ')
    })

    it('Login Page successfully and create new article', function () {
        loginPage.clickSignInLink()
        loginPage.enterLoginDetails()
        homePage.clickOnNewArticle()
        homePage.enterDetailsForArticleAndPublish('Test article')
        homePage.verifyArticleIsCreated()
    })

    it('Verify newly created article is visible on Global Feed', function () {
        loginPage.clickSignInLink()
        loginPage.enterLoginDetails()
        homePage.clickOnNewArticle()
        homePage.enterDetailsForArticleAndPublish('Test article')
        homePage.verifyArticleIsCreated()
        homePage.verifyArticleOnGlobalFeed()
    })

})
