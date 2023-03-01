/// <reference types ='cypress'/>

import loginPage from "../Models/LoginPageModel"
import homePage from "../Models/HomePageModel"

describe('Edit the article suite', function () {

    beforeEach(function () {
        cy.visit(Cypress.env('url'))
    })

    it('Create new article and edit the article and verify article is updated', function () {
        loginPage.clickSignInLink()
        loginPage.enterLoginDetails()
        homePage.clickOnNewArticle()
        homePage.enterDetailsForArticleAndPublish('New article for editing')
        homePage.verifyArticleIsCreated()
        homePage.clickOnEditArticleButton()
        homePage.editArticleAndVerifyIsUpdated('Article title is edited')
    })

})