const articles = require('../../fixtures/locators/articles')
const login = require('../../fixtures/locators/login')

//export const clickOnArticle(article, ()=> {
//    cy.get(ARTICLE_SIGNUP_LNK).click()
//})

export const loginToApp = (username,password) => {
    cy.get("[href='/login']").click()
      .get("[placeholder='Email']").click().type(username)
      .get("[placeholder='Password']").click().type(password)
      .get(".btn-primary").click()
      .get("[routerlink='/editor").should('include.text','New Article')
}

export const createNewArticle = (title,desc,body,tags) => {
    cy.get("[routerlink='/editor']").click()
      .get("[formcontrolname='title'").click().type(title)
      .get("[formcontrolname='description']").click().type(desc)
      .get("[formcontrolname='body']").click().type(body)
      .get("[placeholder='Enter tags']").click().type(tags)
      .get(".btn-primary").click()
      .get(".btn-primary").should('include.text','Post Comment')
}