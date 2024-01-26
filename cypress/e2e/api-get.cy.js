/// <reference types="cypress" />

describe('GET - httpbit works with response', () => {
    it('response should be 200', () => {
        cy.request('https://httpbin.org').then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const currentStatusText = response.statusText
            const expectedStatusText = 'OK'

            assert.equal(expectedStatus, currentStatus)
            assert.equal(expectedStatusText, currentStatusText)
        })
    })
})

describe('GET - httpbit works with response on incorrect url', () => {
    const request = {
        url: 'https://httpbin.org/incorrect-page/',
        failOnStatusCode: false
    }

    it('response should be 200', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            assert.equal(expectedStatus, currentStatus)
        })
    })
})