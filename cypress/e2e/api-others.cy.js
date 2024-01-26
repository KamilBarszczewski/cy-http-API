/// <reference types="cypress" />

describe('GET - Check duration', () => {
    const request = {
        method: 'GET',
        url: 'https://httpbin.org/get',
        failOnStatusCode: false
    }

    it('test duration', () => {
        cy.request(request).then(response => {
            cy.log(response.duration)
            assert.isTrue(response.duration <= 300)
        });
    });
});

/// <reference types="cypress" />

describe('POST - Check duration', () => {
    const request = {
        method: 'POST',
        url: 'https://httpbin.org/post',
        failOnStatusCode: false
    }

    it('test duration', () => {
        cy.request(request).then(response => {
            cy.log(response.duration)
            assert.isTrue(response.duration <= 250)
        });
    });
});