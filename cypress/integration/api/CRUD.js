describe("API tests", function() {

    it("User should be able to make a post", ()=> {
        cy.request({
            url: '/api/articles',
            method: 'POST',
            auth: {
                username: Cypress.env('username'),
                password: Cypress.env('password')
            },
            headers: {
                'jwtauthorization' : Cypress.env('jwtToken'),
                'content-type' : 'application/json'
            },
            body : {
                    'article' : {
                      'tagList' :[],
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

    it("User should be able to fetch the articles", ()=> {
        cy.request({
            url: '/api/articles?limit=10&offset=0',
            method: 'GET',
            auth: {
                username: Cypress.env('username'),
                password: Cypress.env('password')
            },
            headers: {
                'jwtauthorization' : Cypress.env('jwtToken'),
                'content-type' : 'application/json'
            }
        }).then(function(response) {
            const article = response.body.articles;
            expect(article).to.have.length(10)
        })
    })

})