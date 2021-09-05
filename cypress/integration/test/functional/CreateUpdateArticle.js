import {selectArticle, addCommentToArticle,
        deleteCommentFromArticle,
        loginToApp, createNewArticle, editArticle} from "../../../utils/actions"

describe('New Article creation', () => {
      let articleTitle
      let comment = "Commenting on the article!"
      let article = 'Article-Title'

      beforeEach(() => {
        cy.navigate()
        loginToApp(Cypress.env('username'),Cypress.env('password'))
      })

      it("Registered User should be able to create a new article", () => {
          articleTitle = 'Article-Title'+ Date.now().toString()
          createNewArticle(articleTitle,"Article on test automation", "All about automation!","automation")
      })

      it("Registered User should be able to add-delete a comment to the article", () => {
          articleTitle = 'Article-Title'+ Date.now().toString()
          createNewArticle(articleTitle,"Article on test automation", "All about automation!","automation")
          addCommentToArticle(articleTitle,"Commenting on the article!")
          deleteCommentFromArticle(articleTitle,comment)
      })

      it("Guest user should be able to edit the article", () => {
          selectArticle(articleTitle)
          editArticle(articleTitle,"Article on test automation - Updated", "All about automation! - Updated","automation-Updated")
      })
 });