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

export const selectArticle = (article) => {
      cy.contains('Home').click()
        .get('a.nav-link').contains('Global Feed').click()
        .get('a.preview-link').contains(article).click()
}

export const addCommentToArticle = (article, comment, author) => {
      selectArticle(article)

      cy.get("[placeholder='Write a comment...']").click().type(comment)
        .get(".btn-primary").contains('Post Comment').click()
        .get(".card-text").should('include.text',comment)
        .get(".card-footer").should('include.text',author)
}

export const deleteCommentFromArticle = (article, comment, author) => {
    cy.get(".ion-trash-a").last().click()
      .get(".card-footer").should('not.include.text',comment)
}