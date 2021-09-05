
//Tests to validate the PUT endpoint to update article
describe("DELETE", function() {

    let article
    beforeEach(() => {
        Cypress.Cookies.defaults({
              preserve: 'session_id',
            })
        cy.request({
                   url: '/api/articles',
                   method: 'POST',
                   auth: {
                            username: 'candidatex',
                            password: 'qa-is-cool'
                          },
                          headers: {
                               'jwtauthorization' : Cypress.env('jwtToken_dark'),
                               'content-type' : 'application/json'
                          },
                          body : {
                               'article' : {
                               'tagList' :[''],
                               'title' : '',
                               'description' : '',
                               'body' : ''
                               }
                          }
                       }).then(function(response) {
                       article = response.body.article.slug;
                 })
    })


    it("User should be able to delete the post", ()=> {

            cy.fixture('api/article.json').then(req_body => {
                 cy.request({
                     url: '/api/articles/'+article,
                     method: 'DELETE',
                     auth: {
                         username: 'candidatex',
                         password: 'qa-is-cool'
                     },
                     headers: {
                         'jwtauthorization' : Cypress.env('jwtToken_dark'),
                         'content-type' : 'application/json'
                     }
                 }).then(function(response) {
                     const article = response.body.article;
                     expect(response.status).to.eq(204)
                 })
             })
        })
})