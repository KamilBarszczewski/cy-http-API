/// <reference types="cypress" />

describe('POST - httpbit works with correct url', () => {
    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        failOnStatusCode: false
    }

    it('response should be 200', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const currentStatusText = response.statusText
            const expectedStatusText = 'OK'

            assert.equal(expectedStatus, currentStatus)
            assert.equal(expectedStatusText, currentStatusText)
        });
    });
});

describe('POST - httpbit works with correct endpoint', () => {
    const request = {
        method: 'POST',
        url: 'https://httpbin.org/put',
        failOnStatusCode: false
    }

    it('response should be 200', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const currentStatusText = response.statusText
            const expectedStatusText = 'OK'

            assert.equal(expectedStatus, currentStatus)
            assert.equal(expectedStatusText, currentStatusText)
        });
    });
});

describe('POST - httpbit works with correct', () => {
    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post1',
        failOnStatusCode: false
    }

    it('response should be 200', () => {
        cy.request(request).then(response => {
            const currentStatus = response.status;
            const expectedStatus = 200;

            const currentStatusText = response.statusText
            const expectedStatusText = 'OK'

            assert.equal(expectedStatus, currentStatus)
            assert.equal(expectedStatusText, currentStatusText)
        });
    });
});