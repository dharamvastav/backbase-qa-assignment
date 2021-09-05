
//Tests to validate the POST endpoint to create article with various inputs
describe("POST", function() {

    beforeEach(() => {
        Cypress.Cookies.defaults({
              preserve: 'session_id',
            })
    })

    it("User should be able to make a post with blank details", ()=> {
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
               const article = response.body.article;
               expect(article).to.have.not.null
         })
    })

    it("User should be able to make a post with blank title", ()=> {
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
                      'tagList' :['api'],
                      'title' : '',
                      'description' : 'NewArticle',
                      'body' : 'NewArticle'
                   }
            }
        }).then(function(response) {
            const article = response.body.article;
            expect(article).to.have.not.null
        })
    })

    it("User should be able to make a post with all the details provided", ()=> {
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
                          'tagList' :['api'],
                          'title' : 'API - Testing',
                          'description' : 'New Article',
                          'body' : 'NewArticle'
                       }
                }
            }).then(function(response) {
                const article = response.body.article;
                expect(article.slug).to.include('api-testing')
            })
        })
})