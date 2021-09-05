
//Resuable user actions to chain them to form e2e flow
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
      assert(cy.get(".btn-primary").should('include.text','Post Comment'))
}

export const selectArticle = (article) => {
      cy.contains('Home').click()
        .get('a.nav-link').contains('Global Feed').click()
        .get('.article-preview').contains(article).click()
}

export const addCommentToArticle = (article, comment) => {
      selectArticle(article)
      cy.get("[placeholder='Write a comment...']").click().type(comment)
        .get(".btn-primary").contains('Post Comment').click()
       assert(cy.get(".card-text").last().should('include.text',comment))
}

export const deleteCommentFromArticle = (article, comment) => {
      cy.get(".ion-trash-a").last().click()
        assert(cy.get(".card-footer").should('not.have.text',comment))
}

export const editArticle = (title,desc,body,tags) => {
    cy.get(".btn-outline-secondary").contains(" Edit Article ").click()
    createNewArticle(title,desc,body,tags)
    assert(cy.get(".banner").should('include.text',title))
    assert(cy.get(".btn-primary").should('include.text','Post Comment'))
}