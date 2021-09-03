import {selectArticle,
        addCommentToArticle,
        deleteCommentFromArticle,
        loginToApp, createNewArticle} from "../../../fixtures/utils/actions"

describe('New Article creation', () => {
      let articleTitle
      let comment = "Commenting on the article!"

      beforeEach(() => {
        cy.navigate()
        loginToApp(Cypress.env('username'),Cypress.env('password'))
      })

      it("User should be able to create a new article", () => {
          articleTitle = 'Article-Title'+ Date.now().toString()
          createNewArticle(articleTitle,"Article on test automation", "All about automation!","automation")
      })

      it("User should be able to add-delete a comment to the article", () => {
          articleTitle = 'Article-Title'+ Date.now().toString()
          createNewArticle(articleTitle,"Article on test automation", "All about automation!","automation")
          addCommentToArticle(articleTitle,"Commenting on the article!")
          deleteCommentFromArticle(articleTitle,comment)
      })
 });