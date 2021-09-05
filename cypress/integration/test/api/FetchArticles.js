
describe("GET", function() {

    beforeEach(() => {
            Cypress.Cookies.defaults({
                  preserve: 'session_id',
                })
    })

    it("User should be able to fetch the articles", ()=> {
        cy.request({
            url: '/api/articles?limit=10&offset=0',
            method: 'GET',
            auth: {
                username: 'candidatex',
                password: 'qa-is-cool'
            }
        }).then(function(response) {
            const article = response.body.articles;
            expect(article).to.have.length(10)
        })
    })

})