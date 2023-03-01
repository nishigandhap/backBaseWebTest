/// <reference types = 'cypress'/>

import loginPage from "../Models/LoginPageModel"
import homePage from "../Models/HomePageModel"

describe('Delete Article suite', function () {

    beforeEach(function () {
        cy.visit(Cypress.env('url'))
    })

    it('Login Page successfully and create new article and delete the article and verify article is not present', function () {
        loginPage.clickSignInLink()
        loginPage.enterLoginDetails()
        homePage.clickOnNewArticle()
        homePage.enterDetailsForArticleAndPublish('Test article for delete')
        homePage.verifyArticleIsCreated()
        homePage.deleteArticleAndVerifyNotPresent()
    })

    it('Delete the comment of the article and verify comment is deleted', function () {
        loginPage.clickSignInLink()
        loginPage.enterLoginDetails()
        homePage.clickOnNewArticle()
        homePage.enterDetailsForArticleAndPublish('Test article for delete')
        homePage.verifyArticleIsCreated()
        homePage.deleteCommentForArticle()
        homePage.verifyArticleIsDeleted()
    })

})