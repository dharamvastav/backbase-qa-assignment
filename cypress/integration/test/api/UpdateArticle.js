
//Tests to validate the PUT endpoint to update article
describe("PUT", function() {

    beforeEach(() => {
        Cypress.Cookies.defaults({
              preserve: 'session_id',
            })
    })


    it("User should not be able to update other users post", ()=> {

            cy.fixture('api/article.json').then(req_body => {
                 cy.request({
                     url: '/api/articles/update-pzhqcd',
                     method: 'PUT',
                     auth: {
                         username: 'candidatex',
                         password: 'qa-is-cool'
                     },
                     body: req_body,
                     headers: {
                         'jwtauthorization' : Cypress.env('jwtToken_vastav'),
                         'content-type' : 'application/json'
                     }
                 }).then(function(response) {
                     const article = response.body.article;
                     expect(response.status).to.eq(403)
                 })
             })
        })

    it("User should be able to update the title of the post", ()=> {

            cy.fixture('api/article.json').then(req_body => {
                 cy.request({
                     url: '/api/articles/new-article-api-dxdmb9',
                     method: 'PUT',
                     auth: {
                         username: 'candidatex',
                         password: 'qa-is-cool'
                     },
                     body: req_body,
                     headers: {
                         'jwtauthorization' : Cypress.env('jwtToken_dark'),
                         'content-type' : 'application/json'
                     }
                 }).then(function(response) {
                     const article = response.body.article;
                     expect(response.status).to.eq(200)
                 })
             })
        })
})