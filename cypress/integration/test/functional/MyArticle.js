import {selectArticle,
        addCommentToArticle,
        deleteCommentFromArticle,
        loginToApp, createNewArticle} from "../../../fixtures/utils/actions"

describe('New Article creation', () => {
      beforeEach(() => {
        cy.navigate()
      })

      it("User should be able to create a new article", async() => {
          const title = Date.now().toString()
          loginToApp(Cypress.env('username'),Cypress.env('password'))
          createNewArticle('Article-Title'+title,"Article on test automation", "All about automation!","automation")

      })

      it("User should be able to add/delete a comment to the article", async() => {
          const articleTitle = 'Article-Title'+ Date.now().toString()
          loginToApp(Cypress.env('username'),Cypress.env('password'))
          createNewArticle(articleTitle,"Article on test automation", "All about automation!","automation")
          addCommentToArticle(articleTitle,"Commenting on the article!","darknight")
          deleteCommentFromArticle(articleTitle,"Commenting on the article!","darknight")
      })
 });