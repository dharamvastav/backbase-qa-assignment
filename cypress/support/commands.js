// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("navigate", ()=>{
    cy.visit('https://qa-task.backbasecloud.com', {
            auth: {
                username: 'candidatex',
                password: 'qa-is-cool'
            }
     })
})

Cypress.Commands.add("CreateArticle", ()=> {
    cy.request({
                url: '/api/articles',
                method: 'POST',
                auth: {
                    username: 'candidatex',
                    password: 'qa-is-cool'
                },
                headers: {
                    'jwtauthorization' : Cypress.env('jwtToken'),
                    'content-type' : 'application/json'
                },
                body : {
                        'article' : {
                          'tagList' :['api'],
                          'title' : 'NewArticle',
                          'description' : 'NewArticle',
                          'body' : 'NewArticle'
                       }
                }
            }).then(function(response) {
                const article = response.body.article;
                expect(article.slug).to.include('newarticle')
            })
})
