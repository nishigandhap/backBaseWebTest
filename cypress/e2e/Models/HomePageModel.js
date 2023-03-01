
class HomePageModel {

    constructor() {
        this.elements = {
            articleTitle: () => cy.get('input[formcontrolname="title"]'),
            description: () => cy.get('input[formcontrolname="description"]'),
            articleBody: () => cy.get('textarea[formcontrolname="body"]'),
            tags: () => cy.get('input[placeholder="Enter tags"]')
        }
    }

    clickOnNewArticle() {
        cy.contains(' New Article ').click()
    }

    enterDetailsForArticleAndPublish(articleTitleText) {
        this.elements.articleTitle().type(articleTitleText).invoke('val').as('articleTile')
        .then((title) => {
            let articleText = title
            cy.log(articleText)
        })
        this.elements.description().type('About testing')
        this.elements.articleBody().type('Useful for testers')
        this.elements.tags().type('Tester book')
        this.clickPublishButton()
    }

    clickPublishButton() {
        cy.contains(' Publish Article ',{ exact: true }).click()
    }

    verifyArticleIsCreated() {
        cy.get('@articleTile').then((articleTile) => {
            cy.get('.container h1').should('have.text', articleTile);
        });
    }

    verifyNoFeedMessage(userName) {
        cy.contains(userName).click()
        cy.get('.app-article-preview').next().should('contain.text', ' No articles are here... yet.')
    }

    verifyArticleOnGlobalFeed() {
        cy.contains(' Home ',{ exact: true }).click()
        cy.contains(' Global Feed ',{ exact: true }).click()
        cy.get('@articleTile').then((articleTile) => {
            cy.get('.preview-link h1').first().should('have.text', articleTile);
        });
    }

    deleteArticleAndVerifyNotPresent() {
        cy.contains(' Home ',  { exact: true }).click()
        cy.contains(' Global Feed ',{ exact: true }).click()
        cy.get('@articleTile').then((articleTile) => {
            cy.get('.preview-link h1').first().should('have.text', articleTile).click()
        })
        cy.contains(' Delete Article ',{ exact: true }).click()
        cy.contains(' Home ',{ exact: true }).click()
        cy.contains(' Global Feed ',{ exact: true }).click()
        cy.get('@articleTile').then((articleTile) => {
            cy.get('.preview-link h1').first().should('not.have.text', articleTile)
        })
    }

    deleteCommentForArticle() {
        cy.contains(' Home ',{ exact: true }).click()
        cy.contains(' Global Feed ',{ exact: true }).click()
        cy.get('@articleTile').then((articleTile) => {
            cy.get('.preview-link h1').first().should('have.text', articleTile).click()
        })
        cy.get('textarea[class^="form-control"]').type('Good article').invoke('val').as('commentArticleText').then((commentArticle) => {
            let commentArticleText = commentArticle
            cy.contains(' Post Comment ',{ exact: true }).click()
            cy.get('.card-text').invoke('text').then((cardText) => {
                expect(cardText.trim()).to.equal(commentArticleText)
            })
        })
        cy.get('i.ion-trash-a').last().click()
    }

    verifyArticleIsDeleted() {
        cy.get('@commentArticleText').then((commentArticleText) => {
            cy.get('.article-page').should('not.have.text', commentArticleText);
        })
    }

    clickOnEditArticleButton() {
        cy.contains(' Edit Article ',{ exact: true }).click()
        cy.url().should('match', /editor\/new-article-for-editing-[a-z0-9]+/)
    }

    editArticleAndVerifyIsUpdated(articleTitleText) {
        this.elements.articleTitle().clear().type(articleTitleText).invoke('val').as('newArticleText').then((title) => {
            articleTitleText = title
        })
        this.clickPublishButton()
        cy.get('@newArticleText').then((articleTile) => {
            cy.get('.container h1').should('have.text', articleTile);
        })
    }
}

export default new HomePageModel()