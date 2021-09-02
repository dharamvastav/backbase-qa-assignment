import {loginToApp, createNewArticle} from "../utils/actions"

describe('New Article creation', () => {
      beforeEach(() => {
        cy.navigate()
      })
      it("User should be able to create a new article", async() => {
          const title = Date.now().toString()
          loginToApp(Cypress.env('username'),Cypress.env('password'))
          createNewArticle('Article-Title'+title,"Article on test automation", "All about automation!","automation")

      })
 });